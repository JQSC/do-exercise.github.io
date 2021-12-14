const express = require('express');
const path = require('path');

const app = new express();

app.set('port', (process.env.PORT || 8080));

app.use('/',express.static(path.join(__dirname, '/'))); 



app.listen(app.get('port'), function () {
    console.log("启动成功!");
});