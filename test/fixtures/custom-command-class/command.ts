import { generateFigSpec } from '../../../src'
import { Command } from 'commander'

class CommandWithTrace extends Command {
  createCommand(name: string) {
    const cmd = new Command(name)

    cmd.option('-t, --trace', 'display extra information when run command')
    return cmd
  }
}

const program = new CommandWithTrace('program').option('-v, ---verbose')

program.command('serve [params...]').option('-p, --port <number>', 'port number')

program.command('build <target>')

generateFigSpec(program, 'output.ts', { cwd: __dirname })
