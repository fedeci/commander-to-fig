// Autogenerated by https://github.com/fedeci/commander-to-fig

const completionSpec: Fig.Spec = {
  name: "",
  options: [
    { name: ["-V", "--version"], description: "output the version number" },
    {
      name: ["-h", "--help"],
      description: "display help for command",
      priority: 49,
    },
  ],
  args: [{ name: "username" }, { name: "password", isOptional: true }],
};

export default completionSpec;
