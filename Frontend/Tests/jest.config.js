module.exports = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!(expo|expo-modules-core|expo-font|expo-asset|@expo|@unimodules|unimodules|@react-native|react-native|react-native-reanimated)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleNameMapper: {
  '^react-native$': '<rootDir>/__mocks__/react-native.js',
},

};
