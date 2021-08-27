const completionSpec: Fig.Spec = {
  name: "",
  options: [
    { name: ["-V", "--version"], description: "output the version number" },
    {
      name: ["-t", "--template-engine"],
      description: "Add template [engine] support",
      args: { name: "engine", isOptional: true, default: "jade" },
    },
    {
      name: ["-c", "--cheese"],
      description: "Add the specified type of cheese [marble]",
      args: { name: "type", isOptional: true, default: "marble" },
    },
    {
      name: ["-l", "--list"],
      description: "Specify list items defaulting to 1,2,3",
      args: { name: "items" },
    },
  ],
};

export default completionSpec;
