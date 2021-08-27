import path from "path";
import fs from "fs";
import child from "child_process";
import chalk from "chalk";

const fixturesPath = path.resolve("test/fixtures/");

function report(fixture: string, successful: boolean) {
  successful
    ? console.log(chalk.bgGreen(`Successfully run ${chalk.underline(fixture)}`))
    : console.log(chalk.bgRed(`Failed running ${chalk.underline(fixture)}`));
}

function runFixtures() {
  const fixtures = fs.readdirSync(fixturesPath, { withFileTypes: true });
  for (const fixture of fixtures) {
    if (!fixture.isDirectory()) continue;
    const fixturePath = path.resolve(fixturesPath, fixture.name);

    const command = path.resolve(fixturePath, "command.ts");
    const expected = path.resolve(fixturePath, "expected.ts");
    const output = path.resolve(fixturePath, "output.ts");

    const cmd = `node -r ts-node/register ${command}`;
    child.execSync(cmd);

    if (!fs.existsSync(expected)) {
      fs.copyFileSync(output, expected);
      continue;
    }

    const outputFile = fs.readFileSync(output);
    const expectedFile = fs.readFileSync(expected);
    report(fixture.name, outputFile.equals(expectedFile));
  }
}

runFixtures();
