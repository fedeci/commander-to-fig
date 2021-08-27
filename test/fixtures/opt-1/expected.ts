const completionSpec: Fig.Spec = {
  name: "npm",
  subcommands: [
    {
      name: "install",
      options: [{ name: ["-D", "--save-dev"] }],
      args: [{ name: "dep", isOptional: true }],
    },
  ],
};

export default completionSpec;
