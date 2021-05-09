const fs = require('fs')
const { resolve } = require('path')

module.exports = {
    entry:'./src/main.js',
    output:{
        filename:"bundle.js",
        //绝对路径
        path:resolve(__dirname,'build')

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
            // {
            //     test:/\.(png|jpg|jpeg|svg|gif)$/,
            //     use:[
            //         {
            //             loader:"file-loader",
            //             options:{
            //                 name:'[name].[hash:6].[ext]',
            //                 outputPath:"imgs/"
            //             }
            //         }
            //     ]
            // },
            // url-loader 处理图片完全可以代替file-loader
            // 原因是url-loader 中处理不了文件直接交给fiele-loader处理，所以file-loader必须安装
            // 但是在配置中可以不用写
            {
                test:/\.(png|jpg|jpeg|svg|gif)$/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            name:'test/[name].[hash:6].[ext]',
                            limit:1024*40,
                        }
                    }
                ]
            }
        ]
    }
}