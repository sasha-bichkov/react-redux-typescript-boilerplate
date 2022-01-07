module.exports = {
  collectCoverage: true,
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.svg$': "jest-transformer-svg"
  },
  coverageReporters: ['html'],
  coverageDirectory: '<rootDir>/jest-coverage/',
  moduleNameMapper: {
    '^@Root/(.*)$': '<rootDir>/app/$1',
    '^@Pages/(.*)$': '<rootDir>/app/pages/$1',
    '^@Modules/(.*)$': '<rootDir>/app/modules/$1',
    '^@Images/(.*)$': '<rootDir>/public/images/$1',
    '^@Components/(.*)$': '<rootDir>/app/components/$1',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/app/fileMock.ts',
    '\\.(s?css|less)$': '<rootDir>/app/fileMock.ts',
  }
}
