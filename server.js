const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hello World!'));

const PORT = process.env.PORT || 3000; 
const ENV_IP = process.env.IP || "0.0.0.0";
app.listen(PORT, ENV_IP, () => console.log(`Example app listening on port ${PORT}!`));