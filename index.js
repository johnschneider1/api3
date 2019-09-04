const server = require("./server.js");

const port = 8250;
server.listen(port, () => console.log(`\n api on port ${port} **\n`));
