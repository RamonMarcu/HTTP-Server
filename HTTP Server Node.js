//app.js

const http = require('http');
let {requestListener} = require('./callbackFile.js');
const PORT = process.env.PORT || 4001;

const server = http.createServer(requestListener);

server.listen(PORT);


//callbackFile.js

const fs = require('fs');

module.exports = {
  requestListener: (req, res) => {
  fs.readFile('./myWebsite.html',  'utf-8', (err, data) => {
    if (err){
      res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`${err}`);
    res.end();
    } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end(); 
    }
  })
}
}

//myWebsite.html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Website</title>
</head>

<body>
    <h1>I'm hosting this website with my own Node web server</h1>
    <h2>Pretty exciting stuff...</h2>              
</body>

</html>


//bash

$ node app.js
shell-init: error retrieving current directory: getcwd: cannot access parent directories: No such file or directory
path.js:1142
          cwd = process.cwd();
                        ^

Error: ENOENT: no such file or directory, uv_cwd
    at Object.resolve (path.js:1142:25)
    at startup (bootstrap_node.js:129:32)
    at bootstrap_node.js:542:3
$ 