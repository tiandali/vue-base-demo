const path = require('path');
const webpack = require('webpack');
//使用该插件 会清理每次打包后, 过去遗留在dist中的旧代码
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 使用该插件 , 会解析vue文件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 使用该插件,会自动创建并更新html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const os = require('os');
const { mockConfig } = require('./mock.config.js');
module.exports = {
  // 入口,起点或是应用程序的起点入口。从这个起点开始，应用程序启动执行。如果传递一个数组，那么数组的每一项都会执行。 
  // 每个 HTML 页面都有一个入口起点。单页应用(SPA)：一个入口起点，多页应用(MPA)：多个入口起点。
  // 一般指向项目中,src目录下的main.js文件
  // entry: {
  //   app: './src/main.js'
  // },
  entry: './src/main.js', // 项目的入口文件，webpack会从main.js开始，把所有依赖的js都加载打包
  // 输出, 指示 webpack 如何去输出、以及在哪里输出你的「bundle、asset 和其他你所打包或使用 webpack 载入的任何内容」
  // 指的是通过webpack打包后的生成的文件以什么名称, 放置在什么位置,  这里一般放置在dist目录下,
  output: {
    // 将所有依赖的模块合并输出到一个叫bundle.js文件内
    filename: 'bundle.js',
    // 分别对应名称输出
    filename: '[name].[hash].js',
    // 将输出的文件都放在dist目录下
    path: path.join(__dirname, './dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 8081,
    hot: true,
    historyApiFallback: true,
    overlay: true,
    before(server) {
      mockConfig.forEach(e => {
        server[e.method](`${e.api}`, (req, res) => {
          setTimeout(() => res.json(e.response), e.delay || 2000);
        });
      });
    },
  },
  // 配置模块如何被解析, 即设定相对应模块的解析规则
  resolve: {
    // 自动补全的扩展名
    extensions: ['.js', '.vue', '.json', '.css', '.less', '.scss',],
    // 默认路径代理
    // 例如 import Vue from 'vue'，会自动到 'vue/dist/vue.common.js'中寻找
    // 这样可以使之后在开发项目的时候, 引用文件时不必关注不同层级的问题
    alias: {
      '@': path.join(__dirname, './', 'src'),
      '@api': path.join(__dirname, './', 'src/api'),
      '@styles': path.join(__dirname, './', 'src/styles'),
      '@config': path.join(__dirname, './', 'config'),
      'vue$': 'vue/dist/vue.common.js',
      '@components': path.join(__dirname, './', 'src/components')
    }
  },
  // 这个属性,用于设定项目中不同类型的模块所对应的处理规则, 即用到的一些, 诸如sass,less, css, vue, 图片, 文件, 都在  
  //这个属性中进行设置处理规则, 当然, 都会有对应处理的loader.  loader 用于对模块的源代码进行转换
  module: {
    rules: [
      {
        test: /\.vue$/, // 匹配对象的后缀, 如这里匹配.vue文件
        use: [{ // 用于转换该文件类型的loader,
          loader: 'vue-loader',
          options: { // 内部配置
            loaders: {
              'scss': 'style-loader!css-loader!sass-loader'
            }
          }
        }],
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'] // 使用vue-style-loader直接插入到style标签中
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        // 这里注意一点, use为数组时, 即多loader作用时, 执行规则从后到前, 先使用数组末尾的loader执行转换
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  // 自定义webpack构建过程, 例如，当多个 bundle 共享一些相同的依赖，使用 CommonsChunkPlugin 有助于提取这些依赖到共享的 bundle 中，来避免重复打包
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    }),
    new VueLoaderPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin()
  ],

}

