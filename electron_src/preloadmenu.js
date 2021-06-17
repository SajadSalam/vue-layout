const { default: config } = require("../src/config");


document.addEventListener("readystatechange", () => {
  if (document.readyState === "interactive") {
    const customTitlebar = require("custom-electron-titlebar");

    const MyTitleBar = new customTitlebar.Titlebar({
      backgroundColor: customTitlebar.Color.fromHex("#115A7B"),
      titleHorizontalAlignment: "center",
    });
    if (
      location.hostname === "" &&
      location.href.split("/").reverse()[0] !== "index.html"
    )
      MyTitleBar.updateMenu({ items: [] });
    MyTitleBar.updateTitle(
      `${config.projectName} - ${require("../package.json").version}`
    );
  }
});
