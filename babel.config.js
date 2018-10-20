module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ],
  env: {
    test: {
      presets: [["env", { targets: { node: "current" } }]]
    }
  }
};
