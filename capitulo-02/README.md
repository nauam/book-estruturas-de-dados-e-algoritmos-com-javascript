# Visão geral sobre ECMAScript e TypeScript

O Capítulo 2, aborda algumas funcionalidades novas de JavaScript introduzidas a partir de 2015, além de incluir as funcionalidades básicas do TypeScript, um superconjunto do JavaScript.



Getting Started
npm init

How to Set Up And Install Babel
npm install --save-dev @babel/cli @babel/core @babel/preset-env

.babelrc
{
  "presets": [
    ["@babel/env", {
      "targets": {
        "node": "current"
      }
    }]
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread"
  ]
}