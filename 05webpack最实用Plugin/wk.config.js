const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { DefinePlugin } = require('webpack')

module.exports = {
    entry:'./src/main.js',
    output:{
        filename:"bundle.js",
        //绝对路径
        path:path.resolve(__dirname,'build'),
        // assetModuleFilename:"img/[name].[hash:6][ext]"

    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                        "style-loader", 
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1
                            }
                        }, 
                        "postcss-loader"
                    ]
            },
            {
                test:/\.less$/,
                use:[
                    "style-loader", 
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2
                        }
                    },
                    "postcss-loader", 
                    "less-loader"
                ]
            },
            {
                test:/\.(png|jpg|svg|jpeg|gif)$/,
                // type:"asset/resouce"
                // type:"asset/inline",
                type:"asset",
                generator:{
                    filename:"img/[name].[hash:6][ext]",
                },
                parser:{
                    dataUrlCondition:{
                        maxSize:40 * 1024
                    }
                }
            },
            {
                test:/\.(ttf|woff|woff2)/,
                // type:"asset/inline"
                type:"asset/resource",
                generator:{
                    filename:"font/[name][ext]"
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:"最实用Plugin",
            template:"./public/index.html"
        }),
        new CopyPlugin({
            patterns:[
                {
                    from:"public",
                    globOptions:{
                        ignore:["**/abc.txt", "**/index.html"]
                    }
                }
            ]
        }),
        new DefinePlugin({
            BASE_URL:'"./"'
        })
    ]
}