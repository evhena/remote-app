import federation from '@originjs/vite-plugin-federation';

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    port: 3001,
  },
  plugins: [
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteApp': './src/RemoteApp',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: require('./package.json').dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: require('./package.json').dependencies['react-dom'],
        },
      },
    }),
  ],
};
