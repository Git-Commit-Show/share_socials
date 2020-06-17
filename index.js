const http = require("http");
const fs = require("fs");

function onReqest(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  fs.readFile("./views/index.html", null, function (err, data) {
    if (err) {
      res.writeHead(404);
      res.write("File Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
}

http.createServer(onReqest).listen(8000);
