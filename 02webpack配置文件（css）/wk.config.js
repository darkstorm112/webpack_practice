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
            
        ]
    }
}