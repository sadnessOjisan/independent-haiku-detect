const result = require("@babel/parser").parse(
  `
class Hoge {
    constructor() {
      alert("hey men");
    }
  }
  
`,
  {
    sourceType: "module",

    plugins: []
  }
);

console.log(result);
