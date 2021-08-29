import { generateFigSpec } from '../../../src'
import commander from 'commander'
const program = new commander.Command()

program
  .addOption(new commander.Option('-d, --drink <size>', 'drink cup size').choices(['small', 'medium', 'large']))

generateFigSpec(program, 'output.ts', { cwd: __dirname })
