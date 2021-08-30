import { generateFigSpec } from '../../../src'
import commander from 'commander'
const program = new commander.Command()

program.addArgument(new commander.Argument('<drink-size>', 'drink cup size').choices(['small', 'medium', 'large']))

generateFigSpec(program, 'output.ts', { cwd: __dirname })
