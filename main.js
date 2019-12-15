const fs = require("fs");
const data = fs.readFileSync("./example/example1.js", "utf-8");
const result = require("@babel/parser").parse(data, {
  sourceType: "module",
  tokens: true
});

console.log(result.tokens.map(t => t.value));
