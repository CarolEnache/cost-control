module.export = {
  cacheDirectory: 'jest-cache',
  coverageDirectory: 'jest-coverage',
  coveragePathIgnorePatterns: ['<rootDir>/component-library/(?:.+?)/lib/'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  testPathIgnorePatterns: ['<rootDir>/component-library/(?:.+?)/lib/']
};
