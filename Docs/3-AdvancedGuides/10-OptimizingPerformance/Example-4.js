//webpack

new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
}),
new webpack.optimize.UglifyJsPlugin()