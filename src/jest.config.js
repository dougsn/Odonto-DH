module.exports = {
    moduleDirectories: [
      'node_modules',
      'src/tests/',
      'src/Components',
      transformIgnorePatterns ["<rootDir>/node_modules/(?!(axios)/)"],
      __dirname      
    ]
  }