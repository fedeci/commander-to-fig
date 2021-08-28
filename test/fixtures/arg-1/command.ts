import { program } from 'commander'
import { generateFigSpec } from '../../../src'

program.name('npm').command('install').description('Install dependencies').argument('<dep...>')

generateFigSpec(program, 'output.ts', { cwd: __dirname })
