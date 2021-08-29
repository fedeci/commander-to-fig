import { generateFigSpec } from '../../../src'
import { Command } from 'commander'
const program = new Command()

program
  .version('0.0.1')
  .description('Fake package manager')
  .command('install [name]', 'install one or more packages')
  .alias('i')
  .command('search [query]', 'search with optional query')
  .alias('s')

generateFigSpec(program, 'output.ts', { cwd: __dirname })
