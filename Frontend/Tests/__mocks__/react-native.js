const React = require('react');

module.exports = {
  ...jest.requireActual('react-native'),
  NativeModules: {},
  Platform: {
    OS: 'ios',
    select: () => null,
  },
  StyleSheet: {
    create: styles => styles,
  },
};
