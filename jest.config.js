module.exports = {
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: '<rootDir>/jest-coverage/',
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  setupFiles: [
    '<rootDir>/app/setupTests.ts'
  ],
  moduleNameMapper: {
    '^@Root/(.*)$': '<rootDir>/app/$1',
  }
}
