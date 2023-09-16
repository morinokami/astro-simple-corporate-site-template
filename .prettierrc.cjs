/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  printWidth: 100,
};
