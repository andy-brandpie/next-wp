const pxtorem = require("postcss-pxtorem");

module.exports = {
  plugins: [
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require.resolve("postcss-pxtorem"),
    pxtorem({
      rootValue: 16,
      unitPrecision: 5,
      propList: ['font', 'font-size', 'letter-spacing', 'width', 'height', 'margin', 'padding'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: true,
      minPixelValue: 0,
      exclude: /node_modules/i
    })
  ],
};
