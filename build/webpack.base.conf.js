const path = require('path'),
      utils = require('./utils'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      pxtorem = require('postcss-pxtorem');

function useLoader (styleType) {

    let loaderConifg = [
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                plugins: (loader) => [
                    // pxtorem({ //将px转换为rem
                    //     rootValue: 100,
                    //     propWhiteList: [],
                    // }),
                    require('autoprefixer')({
                        browsers: ['last 20 versions']
                    })
                ]
            }
        }
    ]

    //处理loader摆放位置的顺序
    if(styleType !== 'css') {
        loaderConifg.splice(1,0,'stylus-loader');
    }

    return loaderConifg;
}

function cssLoader(styleL) {
    return process.env.NODE_ENV ? 
        ["style-loader", ...useLoader(styleL) ] : 
        ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: useLoader(styleL),
        })
}

module.exports = {
    resolve: {
        // 省略后缀
        extensions: ['.js', '.jsx', '.styl', '.css'],
        //别名
        alias: {
            'lib': path.resolve(__dirname, '../static/lib'),
            'jquery': path.resolve(__dirname, '../static/lib/jquery/jquery.min.js'),
        }
    },
    module: {
        rules: [
        {//本json是对js的eslint的检查
            enforce:"pre",//在babel-loader对源码进行编译前进行lint的检查
            test:/\.js[x]?$/,//检查js文件和jsx文件内的javascript代码的规范
            exclude:path.join(__dirname,'node_module'),
            use:[{
                loader:"eslint-loader",
                options:{
                    formatter: require('eslint-friendly-formatter')   // 编译后错误报告格式
                }
            }]
        },
        {
            test: /\.css$/,
            use: cssLoader('css')
        },{
            test: /\.styl$/,
            use: cssLoader()
        },
        {
            test:/\.js[x]?$/,
            exclude:/(node_modules|lib)/,
            include: path.join(__dirname, '../src'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['stage-0', 'react', 'es2015'],
                    plugins: ['transform-class-properties'],
                }
            }
            
        },
        {
            test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
            use:[{
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('image/[name].[hash:7].[ext]')
                }
            }]
        },{
            test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }]
        }]
    }
}
