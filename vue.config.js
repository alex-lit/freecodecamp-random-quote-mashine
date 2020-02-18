module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/freecodecamp-random-quote-mashine/' : '/',

  outputDir: process.env.OUTPUT_DIR || 'dist',

  assetsDir: 'assets',

  css: {
    sourceMap: true,
  },

  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
};
 