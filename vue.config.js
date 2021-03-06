module.exports = {
    publicPath: './',
    outputDir: 'dist/',
  
    // publicPath: process.env.NODE_ENV === 'production'
    //   ? '/tokenlife/'
    //   : '/',
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
