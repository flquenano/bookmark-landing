const precss = require("precss");
const autoprefixer = require("autoprefixer");
const discardDuplicates = require("postcss-discard-duplicates");
const sortQueries = require("postcss-sort-media-queries");

module.exports = {
  plugins: [precss, sortQueries, discardDuplicates, autoprefixer]
};
