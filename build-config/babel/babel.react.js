module.exports= {
  plugins: [
    'babel-plugin-styled-components',
    '@babel/plugin-transform-react-display-name'
  ],
  presets: [
    [
      "@babel/env",
      { "modules": false }
    ],
    '@babel/preset-react'
  ]
};
