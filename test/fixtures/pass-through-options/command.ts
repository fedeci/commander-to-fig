import { generateFigSpec } from '../../../src'
import { Command } from 'commander'
const program = new Command()

program.argument('<utility>').argument('[args...]').passThroughOptions().option('-d, --dry-run')

generateFigSpec(program, 'output.ts', { cwd: __dirname })
