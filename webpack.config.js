'use strict';

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/script.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/src/'    
  },
  watch: true, 

  module: {}

};
