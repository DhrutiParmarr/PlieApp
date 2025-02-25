// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
// };

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@navigator': './app/navigator',
          '@screens': './app/screens',
          '@components': './app/components',
          '@utils': './app/utils',
          '@theme': './app/theme',
          '@root': './',
        },
      },
    ],
  ],
};
