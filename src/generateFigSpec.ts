import type { Command } from "commander";
import { writeFileSync } from "fs";
import path from "path";

export interface Options {
  cwd?: string;
}

export function generateFigSpec(
  command: Command,
  filename: string,
  options?: Options
): Command {
  const cwd = options?.cwd || process.cwd();
  writeFileSync(path.resolve(cwd, filename), "Ciao!");
  return command;
}
