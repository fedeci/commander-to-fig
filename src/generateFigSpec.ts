import type { Argument, Command, Option } from "commander";
import * as Fig from './fig'
import { writeFileSync } from "fs";
import path from "path";
import prettier from 'prettier'

export interface Options {
  cwd?: string;
}

function getTemplate(spec: Fig.Spec): string {
  return prettier.format(`
    const completionSpec: Fig.Spec = ${JSON.stringify(spec)}

    export default completionSpec;
  `, { parser: 'typescript' })
}

function generateArg(arg: Argument & Record<string, any>): Fig.Arg {
  const _arg: Fig.Arg = {
    name: arg._name,
  }
  if (arg.description !== '') _arg.description = arg.description
  if (!arg.required) _arg.isOptional = !arg.required
  if (arg.variadic) _arg.isVariadic = arg.variadic
  if (arg.defaultValue) _arg.default = arg.defaultValue
  return _arg
}

function generateOption(option: Option & Record<string, any>): Fig.Option {
  const name = []
  if (option.short) name.push(option.short)
  if (option.long) name.push(option.long)
  const _option: Fig.Option = {
    name
  }
  if (option.description !== '') _option.description = option.description

  // Option argument e.g. "-f, --flag <string>"
  // If required and optional are both false it does not have an argument
  if (option.required || option.optional) {
    const name = (option.flags.match(/.*[\[<](.*)[\]>]/) ?? [])[1] ?? ''
    const arg: Fig.Arg = {
      name: name.replace(/\./g, '')
    }
    if (option.optional) arg.isOptional = option.optional
    if (option.variadic) arg.isVariadic = option.variadic
    if (option.argChoices) arg.suggestions = option.argChoices
    if (option.defaultValue) arg.default = option.defaultValue
    _option.args = arg
  }
  return _option
}

function generateCommand(command: Command & Record<string, any>): Fig.Subcommand {
  let name = command._name
  if (command._aliases.length) {
    name = [name, ...command._aliases]
  }
  const _command: Fig.Subcommand = {
    name,
  }
  // Subcommands
  if (command.commands.length) {
    _command.subcommands = command.commands.map(generateCommand)
  }
  // Options
  if (command.options.length) {
    _command.options = (command.options as Option[]).map(generateOption)
  }
  // Args
  if (command._args.length) {
    _command.args = (command._args as Argument[]).map(generateArg)
  }
  return _command
}

export function generateFigSpec(
  command: Command & Record<string, any>,
  filename: string,
  options?: Options
): Command {
  const cwd = options?.cwd || process.cwd();
  const spec = generateCommand(command)
  writeFileSync(path.resolve(cwd, filename), getTemplate(spec));
  return command;
}
