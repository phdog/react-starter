const path = require("path");
const DocGenTSPlugin = require("react-docgen-typescript-webpack-plugin");

module.exports = async ({config, mode}) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
              loader: require.resolve('ts-loader'),
            },
            {
              loader: require.resolve('react-docgen-typescript-loader'),
            },
          ],
    });
    config.plugins.push(new DocGenTSPlugin());
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
}