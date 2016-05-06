var express = require("express");
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'public/swiper')));
app.listen(3000);
console.log("服务器已经启动!");
