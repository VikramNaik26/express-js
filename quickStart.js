const http = require("http");
const {readFileSync} = require("fs");

/* const server = http.createServer((req, res) => {
  // console.log("user hit the server");
  res.writeHead(200, { "content-type": "text/html" });
  // text/html || text/plain
  console.log(req.url);
  // console.log(res.method);
  res.write("<h1>Home Page</h1>");
  res.end();
});

server.listen(5000); */

/* const server = http.createServer();

server.on("request", (req, res) => {
  res.end("<h1>Hey There</h1> <p>Hey there its a paragraph</p>");
}); */

// get all files
const homePage = readFileSync('./index.html', 'utf-8')

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not foundddd</h1>");
    res.end();
  }
});

server.listen(5000);
