const completionSpec: Fig.Spec = {
  name: "",
  options: [
    {
      name: ["-f", "--filename"],
      description:
        "The filename to use when reading from stdin. This will be used in source-maps, errors etc.",
      args: { name: "filename", isOptional: true },
    },
    {
      name: ["--presets"],
      description: "A comma-separated list of preset names.",
      args: { name: "list", isOptional: true },
    },
    {
      name: ["--plugins"],
      description: "A comma-separated list of plugin names.",
      args: { name: "list", isOptional: true },
    },
    {
      name: ["--config-file"],
      description: "Path to a .babelrc file to use.",
      args: { name: "path", isOptional: true },
    },
    {
      name: ["--env-name"],
      description:
        "The name of the 'env' to use when loading configs and plugins. Defaults to the value of BABEL_ENV, or else NODE_ENV, or else 'development'.",
      args: { name: "name", isOptional: true },
    },
    {
      name: ["--root-mode"],
      description:
        "The project-root resolution mode. One of 'root' (the default), 'upward', or 'upward-optional'.",
      args: { name: "mode", isOptional: true },
    },
    {
      name: ["--source-type"],
      args: { name: "script|module", isOptional: true },
    },
    {
      name: ["--no-babelrc"],
      description: "Whether or not to look up .babelrc and .babelignore files.",
    },
    {
      name: ["--ignore"],
      description: "List of glob paths to **not** compile.",
      args: { name: "list", isOptional: true },
    },
    {
      name: ["--only"],
      description: "List of glob paths to **only** compile.",
      args: { name: "list", isOptional: true },
    },
    {
      name: ["--no-highlight-code"],
      description:
        "Enable or disable ANSI syntax highlighting of code frames. (on by default)",
    },
    {
      name: ["--no-comments"],
      description: "Write comments to generated output. (true by default)",
    },
    {
      name: ["--retain-lines"],
      description: "Retain line numbers. This will result in really ugly code.",
    },
    {
      name: ["--compact"],
      description:
        "Do not include superfluous whitespace characters and line terminators.",
      args: { name: "true|false|auto", isOptional: true },
    },
    {
      name: ["--minified"],
      description: "Save as many bytes when printing. (false by default)",
    },
    {
      name: ["--auxiliary-comment-before"],
      description: "Print a comment before any injected non-user code.",
      args: { name: "string", isOptional: true },
    },
    {
      name: ["--auxiliary-comment-after"],
      description: "Print a comment after any injected non-user code.",
      args: { name: "string", isOptional: true },
    },
    {
      name: ["-s", "--source-maps"],
      args: { name: "true|false|inline|both", isOptional: true },
    },
    {
      name: ["--source-map-target"],
      description: "Set `file` on returned source map.",
      args: { name: "string", isOptional: true },
    },
    {
      name: ["--source-file-name"],
      description: "Set `sources[0]` on returned source map.",
      args: { name: "string", isOptional: true },
    },
    {
      name: ["--source-root"],
      description: "The root from which all sources are relative.",
      args: { name: "filename", isOptional: true },
    },
    {
      name: ["-x", "--extensions"],
      description:
        "List of extensions to compile when a directory has been the input. [js,ts,jsx,tsx]",
      args: { name: "extensions", isOptional: true },
    },
    {
      name: ["--keep-file-extension"],
      description: "Preserve the file extensions of the input files.",
    },
    { name: ["-w", "--watch"], description: "Recompile files on changes." },
    {
      name: ["--skip-initial-build"],
      description: "Do not compile files before watching.",
    },
    {
      name: ["-o", "--out-file"],
      description: "Compile all input files into a single file.",
      args: { name: "out", isOptional: true },
    },
    {
      name: ["-d", "--out-dir"],
      description:
        "Compile an input directory of modules into an output directory.",
      args: { name: "out", isOptional: true },
    },
    {
      name: ["--relative"],
      description:
        "Compile into an output directory relative to input directory or file. Requires --out-dir [out]",
    },
    {
      name: ["-D", "--copy-files"],
      description: "When compiling a directory copy over non-compilable files.",
    },
    {
      name: ["--include-dotfiles"],
      description:
        "Include dotfiles when compiling and copying non-compilable files.",
    },
    {
      name: ["--no-copy-ignored"],
      description: "Exclude ignored files when copying non-compilable files.",
    },
    {
      name: ["--verbose"],
      description: "Log everything. This option conflicts with --quiet",
    },
    {
      name: ["--quiet"],
      description: "Don't log anything. This option conflicts with --verbose",
    },
    {
      name: ["--delete-dir-on-start"],
      description: "Delete the out directory before compilation.",
    },
    {
      name: ["--out-file-extension"],
      description: "Use a specific extension for the output files",
      args: { name: "string", isOptional: true },
    },
    { name: ["-V", "--version"], description: "output the version number" },
  ],
};

export default completionSpec;
