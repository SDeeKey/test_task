const path = require('path');

module.exports = function override(config, env) {
    // Add the file-loader rule
    config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    });

    return config;
};
