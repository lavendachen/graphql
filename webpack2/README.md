#
npm init -y   //create package.json
tsc --init    //create tsconfig.json
#
npm install -D typescript
npm install  -D webpack webpack-cli
npm install  -D webpack-dev-server
npm install  -D html-webpack-plugin clean-webpack-plugin
npm install  -D ts-loader
npm install  -D cross-env
# package.json
"dev": "cross-env NODE_ENV=development webpack-dev-server --config build/webpack.config.js",
"build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
#
npm run dev
npm run build