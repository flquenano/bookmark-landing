const precss = require("precss");
const autoprefixer = require("autoprefixer");
const discardDuplicates = require("postcss-discard-duplicates");

module.exports = {
  syntax: "postscss-scss",
  plugins: [precss, autoprefixer, discardDuplicates]
};
