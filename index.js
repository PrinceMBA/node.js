const http = require("http");

// Handler function
const handleRoutes = (req, res) => {
  const url = req.url;
  res.setHeader("Content-Type", "text/html");

  if (url === "/") {
    res.write("<h1>Hello World</h1>");
  } else if (url === "/movie") {
    res.write("Isakaba");
  }

  res.end();
};

// create server
let server = http.createServer(handleRoutes);

// create our port and call back
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
