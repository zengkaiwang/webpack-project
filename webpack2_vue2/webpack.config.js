/* 引入操作路径模块和webpack */
var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = { 
	entry: './src/main.js', 

	output: { 
		path: path.resolve(__dirname, './dist'), 
		publicPath: '/dist/', 
		filename: 'build.js' 
	}, 
  plugins: [
      // make sure to include the plugin for the magic
      new VueLoaderPlugin()
  ],	
	module: { 
		rules: [ 
			{ 
				test: /\.vue$/, 
				loader: 'vue-loader' 
			}, 
			{ 
				test: /\.js$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/ 
			},
          {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    }
       
		] 
	} 
}