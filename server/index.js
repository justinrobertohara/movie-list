const express = require('express');
const app = express();
const port = 1337;

app.use(express.static('./public/dist'));

app.listen(port, () =>
  console.log(`Movie-List App listening on port ${port}!`)
);
