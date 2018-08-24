const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//使用插件可能会导致presets里的查询目录为C盘

module.exports = {
    // context: __dirname + '/src',
    entry: "./src/app.js",
    mode: "development",
    module: {
        rules: [
            //react(jsx)语法处理
            {
            test:/\.js?$/,
            exclude: /(node_mpdules)/,
            loader: 'babel-loader',
            options:{
                presets:['E:\\WebstormProjects\\webpack_configure\\node_modules\\babel-preset-env','E:\\WebstormProjects\\webpack_configure\\node_modules\\babel-preset-react'],
                // presets:['env','react']
            }
        },
            //css文件处理
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            //sass文件处理
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                })
            },
            //图片的配置
            {
                test: /\.(png|jpg|gif)$/,
                // test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            },
            //字体图标的配置
            {
                test: /\.(woff|woff2|svg|eot|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: "/webpack_configure/dist/",
        filename: 'js/app.js'
    },
    plugins: [
        //处理html文件
        new HtmlWebpackPlugin({
                template:  './src/index.html'
            }
        ),
        //独立css文件
        new ExtractTextPlugin("css/[name].css"),
    ],
    //提出公共模块
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },
    devServer:{
        port: 8086
    }
};