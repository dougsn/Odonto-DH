module.exports = {
    moduleDirectories: [
      'node_modules',
      'src/tests/',
      transformIgnorePatterns ["<rootDir>/node_modules/(?!(axios)/)"],
      __dirname      
    ]
  }