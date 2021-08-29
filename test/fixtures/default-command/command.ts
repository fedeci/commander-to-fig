import { generateFigSpec } from '../../../src'
import commander from 'commander'
const program = new commander.Command()

program.command('build').description('build web site for deployment')

program.command('deploy').description('deploy web site to production')

program
  .command('serve', { isDefault: true })
  .description('launch web server')
  .option('-p,--port <port_number>', 'web port')

generateFigSpec(program, 'output.ts', { cwd: __dirname })
