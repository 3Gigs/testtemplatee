const fs = require("fs").promises;
const path = require("path");

if(process.platform === "win32") {
    (async () => {
        const pluginsFolder = path.resolve(process.env.HOME, "AppData", "Roaming", "BetterDiscord", "Plugins");
        const plugins = (await fs.readdir(path.resolve("plugin")))
            .filter(m => m.endsWith(".plugin.js"));
        
        for (const file of plugins) {
            await fs.copyFile(path.resolve("plugin", file), path.resolve(pluginsFolder, file))
        }
        //const plugin = path.resolve("plugin", "embedAll.plugin.js");
        //await fs.copyFile(plugin, pluginsFolder);
    })();
}