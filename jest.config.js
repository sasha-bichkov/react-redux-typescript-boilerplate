module.exports = {
  collectCoverage: true,
  coverageReporters: ['test', 'html'],
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.svg$': 'jest-transformer-svg',
    '.+\\.(css|scss|png|jpe?g|gif)$': 'jest-transform-stub'
  },
  coverageDirectory: '<rootDir>/jest-coverage/',
  moduleNameMapper: {
    '^@Root/(.*)$': '<rootDir>/app/$1',
    "^@Utils/(.*)$": '<rootDir>/app/utils/$1',
    '^@Pages/(.*)$': '<rootDir>/app/pages/$1',
    '^@Modules/(.*)$': '<rootDir>/app/modules/$1',
    '^@Images/(.*)$': '<rootDir>/public/images/$1',
    '^@Components/(.*)$': '<rootDir>/app/components/$1'
  }
}
