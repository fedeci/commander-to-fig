import { generateFigSpec } from '../../../src'
import { Command } from 'commander'
const program = new Command()

program.version('0.1.0').arguments('<username> [password]')

generateFigSpec(program, 'output.ts', { cwd: __dirname })
