require('shelljs/global');
const child = require('child_process'),
      path = require('path'),
      os = require('os'),
      glob = require('glob'),
      config = require('./config');

module.exports = {
	/**
   * 获取所有entry入口
   * @return {[type]}          [description]
   */
	getEntries: function() {
		var files = glob.sync('src/app/**/main.js'),
			entries = {};

		files.forEach(function(filepath){
			var split = filepath.split('/');
			var name = split[split.length - 2];
			entries[name] = './' + filepath;
		})
		return entries;
	},

  //静态目录存放路径
	assetsPath: function(_path) {
      return path.posix.join(config.build.resourcesShortPath, _path);
  },
}
