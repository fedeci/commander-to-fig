import { program } from "commander";
import { generateFigSpec } from "../../../src";

program
  .name("npm")
  .command("install")
  .description("Install dependencies")
  .option("-D");


generateFigSpec(program, "output.ts", { cwd: "test/fixtures/case-1" });
