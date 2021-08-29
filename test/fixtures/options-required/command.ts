import { generateFigSpec } from '../../../src'
import commander from 'commander'
const program = new commander.Command()

program.requiredOption('-c, --cheese <type>', 'pizza must have cheese')

generateFigSpec(program, 'output.ts', { cwd: __dirname })
