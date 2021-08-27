import { program } from "commander";
import { generateFigSpec } from "../../../src";

program
  .name("npm")
  .command("install")
  .description("Install dependencies")
  .option('-D, --save-dev')
  .argument('[dep]')


generateFigSpec(program, "output.ts", { cwd: "test/fixtures/opt-1" });
