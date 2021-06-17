module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      preload: "electron_src/preloadmenu.js",
    },
  },
  configureWebpack: {
    target: "electron-renderer",
  },
  transpileDependencies: ["vuetify"],
};
