module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.(js|ts|tsx)?$',
  testPathIgnorePatterns: ['build/'],
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  }
};
