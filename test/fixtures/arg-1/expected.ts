const completionSpec: Fig.Spec = {
  name: "npm",
  subcommands: [{ name: "install", args: [{ name: "dep", isVariadic: true }] }],
};

export default completionSpec;
