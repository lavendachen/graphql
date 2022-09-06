# Init 
npm root -g
npm install -g typescript
tsc -V
# ts to js
cd src
tsc helloworld.ts 
node helloworld.js

# webpack1 
npm init -y  //create package.json
tsc --init   // create tsconfig.json 1).生成配置文件tsconfig.json
            // 2). 修改tsconfig.json配置 "outDir": "./js",  "strict": false,    
           // 3). 启动监视任务: 终端 -> 运行任务 -> 监视tsconfig.json "tsc: watch - tsconfig.json" in tasks.json
# 使用webpack打包TS
# 下载依赖"devDependencies": {} in package.json

yarn add -D typescript
npm install -D typescript  
  //-D, --save-dev: Package will appear in your devDependencies. 
  // "devDependencies": {  "typescript": "^4.8.2"   }

yarn add -D webpack webpack-cli
yarn add -D webpack-dev-server
npm install -D webpack@4.41.5 webpack-cli@3.3.10 webpack-dev-server@3.10.2
   //"devDependencies": { "webpack": "^4.46.0", "webpack-cli": "^3.3.12", "webpack-dev-server": "^3.11.3"}

yarn add -D html-webpack-plugin clean-webpack-plugin
npm install -D html-webpack-plugin clean-webpack-plugin

yarn add -D ts-loader
yarn add -D cross-env

npm install -D html-webpack-plugin@4.5.0 clean-webpack-plugin@3.0.0 cross-env@7.0.2 ts-loader@8.0.11

#
入口JS: src/main.ts

// import './01_helloworld'

document.write('Hello Webpack TS!')

#
index页面: public/index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>webpack & TS</title>
</head>
<body>
  
</body>
</html>

#
build/webpack.config.js

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
    app: './src/main.ts'
  },

  output: {
    path: resolve('dist'),
    filename: '[name].[contenthash:8].js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: [resolve('src')]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin({
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  devtool: isProd ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',

  devServer: {
    host: 'localhost', // 主机名
    stats: 'errors-only', // 打包日志输出输出错误信息
    port: 8081,
    open: true
  },
}

#
配置打包命令  

"dev": "cross-env NODE_ENV=development webpack-dev-server --config build/webpack.config.js",
"build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "cross-env NODE_ENV=development webpack-dev-server --config build/webpack.config.js",
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  },

#
运行与打包

yarn dev
yarn build

npm run dev
npm run build

https://24kcs.github.io/vue3_study/chapter1/04_webpack%E6%89%93%E5%8C%85.html#build-webpack-config-js