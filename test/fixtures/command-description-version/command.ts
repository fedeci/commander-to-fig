import { generateFigSpec } from '../../../src'
import { Command } from 'commander'
const program = new Command()

program.version('0.0.1').description('Application simple description').option('-f, --foo', 'enable some foo')

generateFigSpec(program, 'output.ts', { cwd: __dirname })
