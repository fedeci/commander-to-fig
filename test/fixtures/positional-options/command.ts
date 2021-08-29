import { generateFigSpec } from '../../../src'
import { Command } from 'commander'
const program = new Command()

program.enablePositionalOptions().option('-p, --progress')

program.command('upload <file>').option('-p, --port <number>', 'port number', '80')

generateFigSpec(program, 'output.ts', { cwd: __dirname })
