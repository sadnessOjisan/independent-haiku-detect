const fs = require("fs");

fs.readFile("./example/example1.js", "utf-8", (err, data) => {
  if (err) throw err; // 例外発生時の処理
  const result = require("@babel/parser").parse(data, {
    sourceType: "module",
    tokens: true
  });

  console.log(result.tokens.map(t => t.value));
});
