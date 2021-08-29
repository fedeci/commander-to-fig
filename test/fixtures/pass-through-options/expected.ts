// Autogenerated by https://github.com/fedeci/commander-to-fig

const completionSpec: Fig.Spec = {
  name: "",
  options: [
    { name: ["-d", "--dry-run"] },
    { name: ["-h", "--help"], description: "display help for command" },
  ],
  args: [
    { name: "utility" },
    { name: "args", isOptional: true, isVariadic: true },
  ],
};

export default completionSpec;