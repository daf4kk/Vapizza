'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './script.js',    //Тот, что принимает  ('./food/js/script.js') вроде рабочий       //'./js/script.js',
  output: {
    filename: 'bundle.js',    //как будет называться собранный файл
    path: path.resolve(__dirname, './dist')  //Путь, куда поместится наш файл (ПОМЕЩАЕТ ВНЕ FOOD, я ща опять весь код просру кста) ( 2 'dist помещает вне food)
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {// Полифилы - замена "команд (forEach, promise...) из ES6" на ES5
                debug: true,    // Полифилы - замена "команд (forEach, promise...) из ES6" на ES5
                corejs: 3,      // npm пакет, обрабатывающий полифилы  
                useBuiltIns: "usage"    //Позволяет скачивать только те полифиллы, которые мы использовали в нашем коде
            }]]
          }
        }
      }
    ]
  }
};