require('shelljs/global');
const path = require('path'),
      express = require('express'),
      webpack = require('webpack'),
      child = require('child_process'),
      bodyParser = require('body-parser'),
      compression = require('compression'),
      ejs = require('ejs'),
      config = require('./config'),
      webpackConfig = require('./webpack.dev.conf');

let port = process.env.PORT || config.dev.port;
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, 'views'));
app.use(compression()); //开启 gzip

//webpack编译器
const compiler = webpack(webpackConfig);

//webpack-dev-server 中间件
let devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

//热更新中间件
const hotMiddleware = require('webpack-hot-middleware')(compiler);

app.use(devMiddleware);
app.use(hotMiddleware);

// 静态资源目录
app.use(express.static('./static'));

//具体路由action
app.get('/*', function(req, res) {
    res.render('hello');
});

const server = app.listen(port, function(){
    console.log("node启动 监听端口：http://127.0.0.1:" + port);
});

process.on('SIGINT', function() {
    console.log('退出node进程');
    process.exit(0);
});
