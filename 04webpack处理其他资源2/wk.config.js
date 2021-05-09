const path = require('path')

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
    }
}