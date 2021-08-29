import { generateFigSpec } from '../../../src'
import { Command } from 'commander'
const program = new Command()

program
  .version('0.1.0')
  .argument('<username>', 'user to login')
  .argument('[password]', 'password for user, if required', 'no password given')
  .description('example program for argument')

generateFigSpec(program, 'output.ts', { cwd: __dirname })
