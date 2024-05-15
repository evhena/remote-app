const {
  withNativeFederation,
  shareAll,
} = require('@softarc/native-federation/build');

module.exports = withNativeFederation({
  name: 'remote',
  exposes: {
    './input': './src/components/Input.jsx',
    './list': './src/components/List.jsx',
  },
  shared: shareAll({
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
    includeSecondaries: false,
  }),
  skip: [
    'react-dom/server',
    'react-dom/server.node',
    'vite-react-microfrontends',
  ],
});
