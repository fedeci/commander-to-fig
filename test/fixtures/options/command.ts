import { generateFigSpec } from '../../../src'
import commander from 'commander'
const program = new commander.Command()

program
  .option('-f, --float <number>', 'float argument')
  .option('-i, --integer <number>', 'integer argument')
  .option('-v, --verbose [level]', 'verbosity that can be increased', '1')
  .option('-c, --collect <value>', 'repeatable value')
  .option('-l, --list <items>', 'comma separated list')

generateFigSpec(program, 'output.ts', { cwd: __dirname })
