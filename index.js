const server = require("./api/server.js");

// const { port } = process.env;

console.log(process.env.USER);
console.log(process.env.PORT);
const PORT = process.env.PORT || 4444;

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});
