const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production' // 是否生产环境

function resolve (dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    app: './src/main.ts'    // main entry 程序入口
  },

  output: {
    path: resolve('dist'),   //打包输出目录
    filename: '[name].[contenthash:8].js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',   // 对.tsx文件进行编译操作
        include: [resolve('src')]   
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin({  //js文件清理
    }),

    new HtmlWebpackPlugin({  //html文件打包处理
      template: './public/index.html'
    })
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js']  //识别的扩展名， 引用所列扩展名文件时，可以不写定义的扩展名。
  },

  devtool: isProd ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',  //debug 提示信息

  devServer: {
    host: 'localhost', // 主机名
    stats: 'errors-only', // 打包日志输出输出错误信息
    port: 8081,
    open: true
  },
}
