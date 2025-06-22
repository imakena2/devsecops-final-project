const express = require('express');
const helmet = require('helmet');
const app = express();
const port = 3000;

app.use(helmet());
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Node.js app running at http://localhost:${port}`);
});