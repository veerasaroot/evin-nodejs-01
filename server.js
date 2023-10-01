const express = require('express') // นำเข้า express
const app = express() // ประกาศตัวแปร App เพื่อเรียกใช้งาน Express

var apiRouter = require('./routes/api');
var webRouter = require('./routes/web');

app.use('/api', apiRouter);

app.use(webRouter);

app.listen(3000);