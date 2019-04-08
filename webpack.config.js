let path=require("path");
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:"./js/script.js"
    ,
    output:{
path:path.resolve(__dirname,"./"),
filename:"./dista/app.js",
    },
    module:{
        rules:
        [
            {
            test:require.resolve("jquery"),
            use:[{
                loader:"expose-loader",
                options:"$"
            }]
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: [{
                   loader: 'css-loader',
                   options: {
                      url: false
                   }
                }, {
                   loader: 'postcss-loader'
                }]
             })
        },
        
{
    test:/\.(png|woff|woff2|eot|svg|ttf)$/,
        use:{
            loader:'file-loader',
            options:{
                outputPath:'./dista/fonts.css',
                name:'[name].[ext]'
            }
        }
}
    ]},
    plugins:[new ExtractTextPlugin('./dista/style.css'),
    new HtmlWebpackPlugin({
        template:'index.html'
    })
] 
    }
    
    
    



   
