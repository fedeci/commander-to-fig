import { program } from "commander";
import { generateFigSpec } from "../../../src";
  
program
  .version('0.0.1')
  .option('-t, --template-engine [engine]', 'Add template [engine] support', 'jade')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .option('-l, --list <items>', 'Specify list items defaulting to 1,2,3', false);
  
  
generateFigSpec(program, "output.ts", { cwd: "test/fixtures/option-with-argument" });