const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        // needs to be an absolute path
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            //test property: regular expression telling everything you see a .js file in our app run it through bable
            test: /\.js$/,
            //exclud node_modules folder becuase they are already processed libraries ready for production
            exclude: /node_modules/
        }, {
            // look for any file ending with css and run it through 
            test: /\.s?css$/,
            // use allows us to set up an array of loaders
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};

