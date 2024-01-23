module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|sass)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(j|t)sx?$": 'babel-jest',
  }
}