const path = require("path");
const DocGenTSPlugin = require("react-docgen-typescript-webpack-plugin");

module.exports = async ({ config, mode }) => {
    config.module.rules.push(
        {
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                },
                {
                    loader: require.resolve('react-docgen-typescript-loader'),
                },
            ],
        }, {
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader",
                },
                {
                    loader: 'css-modules-typescript-loader'
                },
                {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                },
                {
                    loader: "sass-loader"
                }
            ]
        }
    );
    config.plugins.push(new DocGenTSPlugin());
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
}