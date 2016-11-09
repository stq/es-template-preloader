module.exports = {
    resolve: {
        root: './',
        modulesDirectories: ['test', 'node_modules', './']
    },
    entry: {
        main: 'source'
    },
    output: {
        path: './test/out',
        publicPath: '',
        filename: '[name].js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'es-template-preloader'
            }
        ],
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: [/node_modules/, /bower_components/, /datagrid/]
        }, {
            test: /\.html$/,
            loader: 'raw' + (production && '!html-minify' || ''),
            exclude: /node_modules/
        }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('source', 'source.js', Infinity)
    ]


};