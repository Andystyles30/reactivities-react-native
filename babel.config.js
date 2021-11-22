const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ['./src'],
      alias: {
        assets: './src/assets',
        components: './src/components',
        context: './src/context',
        screens: './src/screens',
        navigations: './src/navigations',
        config: './src/config',
        constants: './src/constants',
        keychain: './src/keychain',
        utils: './src/utils',
        styles: './src/styles',
        types: './src/types',
        src: './src',
      },
    },
  ],
  'react-native-reanimated/plugin',
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins,
};
