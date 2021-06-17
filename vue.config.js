module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      preload: "electron_src/preloadmenu.js",
    },
  },
  configureWebpack: {
    target: "web", //electron-renderer
  },
  transpileDependencies: ["vuetify"],
};
