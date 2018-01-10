
const path = require('path');

const config = {
    build: {
        // 打包输出路径
        outputPath: path.resolve(__dirname, '../dist/hello'),
        // html模版路径，基于根路径
        templatePath: 'template.html',
        // html文件输出路径，基于outputPath
        htmlShortPath: '/',
        // 资源输出路径，基于outputPath
        resourcesShortPath: 'resources'
    },
    dev: {
        port: 1983,
    }
};

config.build.resourcesPath = path.join(config.build.outputPath, config.build.resourcesShortPath);
config.build.serverPath = path.join(config.build.outputPath, 'node-server');

module.exports = config;
