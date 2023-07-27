module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '^.+\\.(js|ts|tsx)?$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub',
    '\\.(yaml)$': 'jest-raw-loader'
  },
  transformIgnorePatterns: ['node_modules/(?!@prekari/core-ui)'],
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
    '^@components/(.*)$': '<rootDir>/src/components/$1'
  },
  roots: ['<rootDir>'],
  testRegex: '(/tests/jest/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],
  coveragePathIgnorePatterns: [
    'node_modules',
    '.stories.tsx',
    '<rootDir>/src/Services/services.ts',
    '<rootDir>/src/Services/Api.ts',
    '<rootDir>/src/App.tsx',
    '<rootDir>/src/index.tsx',
    '<rootDir>/src/themes/index.ts'
  ]
}
