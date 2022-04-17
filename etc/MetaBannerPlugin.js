const { Compilation } = require("webpack")
const { PrefixSource, ConcatSource } = require("webpack-sources")
const pluginName = "MetaBannerPlugin"

module.exports = class MetaBannerPlugin {
    constructor({
        name,
        description,
        author,
        authorLink,
        authorId,
        version,
        updateUrl,
        website,
        source,
        invite,
        donate,
        patreon,
    }) {
        this.metaInfo = {
            name,
            description,
            author,
            authorLink,
            authorId,
            version,
            updateUrl,
            website,
            source,
            invite,
            donate,
            patreon,
        }
    };

    makeBanner() {
        let result = "";

        result += "/**\n"
        Object.entries(this.metaInfo)
            .filter(([key, value]) => value != undefined)
            .forEach(([key, value]) => {
                result += `* @${key} ${value} \n`
            })
        result += "*/\n\n"

        return result;
    }

    apply(compiler) {
        compiler.hooks.compilation.tap(pluginName, compilation => {
            compilation.hooks.processAssets.tap(
            {
                name: pluginName,
                stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE
            },
            assets => {
                Object.entries(assets).forEach(([file, source]) => {
                    compilation.updateAsset(file, old => 
                        new ConcatSource(this.makeBanner(), old))
                })
            });
        });
    }
}