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

function generateArg(_arg: Argument & Record<string, any>): Fig.Arg {
  const {
    _name: name, description, required, variadic, defaultValue
  } = _arg

  const arg: Fig.Arg = { name }

  if (description !== '') arg.description = description
  if (!required) arg.isOptional = true
  if (variadic) arg.isVariadic = true
  if (defaultValue) arg.default = defaultValue
  return arg
}

function generateOption(_option: Option & Record<string, any>): Fig.Option {
  const { short, long, flags, description, mandatory, required, optional, variadic, argChoices, defaultValue } = _option

  const name = []
  if (short) name.push(short)
  if (long) name.push(long)
  const option: Fig.Option = { name }

  if (description !== '') option.description = description
  if (mandatory) option.isRequired = true
  // Option argument e.g. "-f, --flag <string>"
  // If required and optional are both false it does not have an argument
  if (required || optional) {
    const name = (flags.match(/.*[\[<](.*)[\]>]/) ?? [])[1] ?? ''
    const arg: Fig.Arg = {
      name: name.replace(/\./g, '')
    }
    if (optional) arg.isOptional = true
    if (variadic) arg.isVariadic = true
    if (argChoices) arg.suggestions = argChoices
    if (defaultValue) arg.default = defaultValue
    option.args = arg
  }
  return option
}

interface ExtendedCommand extends Command {
  _name: string
  _aliases: string[]
  _args: Argument[]
  options: Option[]
}

function generateCommand(_command: Command & Record<string, any>): Fig.Subcommand {
  const { _name, _aliases, commands, _args, options } = _command as ExtendedCommand
  
  const name = _aliases.length > 1 ? [_name, ..._aliases] : _name
  const command: Fig.Subcommand = { name }
  // Subcommands
  if (commands.length) {
    command.subcommands = commands.map(generateCommand)
  }
  // Options
  if (options.length) {
    command.options = options.map(generateOption)
  }
  // Args
  if (_args.length) {
    command.args = _args.map(generateArg)
  }
  return command
}

export function generateFigSpec(
  command: Command,
  filename: string,
  options?: Options
): Command {
  const cwd = options?.cwd || process.cwd();
  const spec = generateCommand(command)
  writeFileSync(path.resolve(cwd, filename), getTemplate(spec));
  return command;
}
