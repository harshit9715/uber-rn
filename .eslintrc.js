// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "plugin:tailwindcss/recommended", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
