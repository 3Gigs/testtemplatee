# Simple template for building BetterDiscord plugins using WebPacks

## Features
* **TypeScript support**
* **Minimalistic, no complex configurations**
* **Support for other modules**

## Directory Structure
```
.
├── etc/                # Webpack plugins, scripts, etc.
├── src/                # Typescript source code
├── config.json         # Meta-info for plugin and other general configurations
├── webpack.config.js   # Webpack configuration
└── plugin/             # All output goes here
```

# Getting Started
1. Fork this template
2. Install dependencies  
```npm install``` 
4. Set meta-info via _config.json_  
Follow this [template](https://github.com/BetterDiscord/BetterDiscord/wiki/Plugin-and-Theme-METAs#common-fields)
5. Build and copy plugin to BD   
```npm run build```