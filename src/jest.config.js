module.exports = {
    moduleDirectories: [
      'src/tests/',
      transformIgnorePatterns ["<rootDir>/node_modules/(?!(axios)/)"],
      __dirname      
    ]
  }