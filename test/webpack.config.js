module.exports = {
    resolve: {
        root: './',
        modules: [ 'test', 'node_modules', './']
    },
    entry: {
        main: 'source'
    },
    module : {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'es-template-preloader'
            }
        ]
    }
};