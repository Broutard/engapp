module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.BASE_URL || '/',
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // skipWaiting: true,
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
    themeColor: "#1976d2",
    msTileColor: "#1976d2",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#1976d2",
    manifestOptions: {
      // start_url: '/?utm_source=homescreen',
      background_color: "#1976d2"
    }
  }
}
