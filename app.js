const express = require('express');
const { dirname } = require('path');
const app = express();
const port = 3000;
const staticDir =dirname + "\\static\\";
app.use(express.static(staticDir));

app.get('/', (req, res) => res.sendFile(staticDir + 'html\\index.html'));

app.listen(port, () => console.log(`Example app listening on ${port} port!`));