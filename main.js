const fileContents = `/* eslint-disable */

const p = {
  apple: 'pears',
};

const entries = {
  "nav-back": "Go back",
  someLanguages: {
    "languages": [
      "en",
      "de",
    ],
  },
  "some": {
    'nested': {
      prop: "penisface",
    },
  },
  ...p,
};

export default entries;`;

const result = require("@babel/parser").parse(fileContents, {
  sourceType: "module",
  tokens: true
});

console.log(result.tokens.map(t => t.value));
