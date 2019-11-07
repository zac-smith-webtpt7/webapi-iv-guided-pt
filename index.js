require("dotenv").config();
const server = require("./api/server.js");

// const { port } = process.env;
// destructure is not best option

console.log(process.env.USER);
console.log(process.env.PORT);
const PORT = process.env.PORT || 4444;

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});

// const sortField = req.query.sortBy || 'id'
// const sortField = req.query.sortBy ? req.query.sortBy : 'id'
