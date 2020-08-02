const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname,"./src/index.html"),
    filename:"index.html"
})
module.exports = {
    entry:"./src/index.js",
    output:{
        path: __dirname + "/dist",
        filename:"main.js"
    },
    mode:"development",
    devServer: {
        port: 9000
      },
    plugins: [htmlWebpackPlugin],
    module:{
        rules:[{
            test:/\.(js|jsx)/,
            loader: "babel-loader",
            exclude: /node_modules/,
        },
        {
            test:/\.css/,
            loader: ["style-loader","css-loader"]
        }
    ]
    },
    resolve:{
        extensions:['.js','.jsx','.json'],
        alias:{
            "@": path.join(__dirname,"./src")
        }
    }
}