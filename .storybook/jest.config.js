module.export = {
  cacheDirectory: 'jest-cache',
  coverageDirectory: 'jest-coverage',
  coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      btanches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/']
};