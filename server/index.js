const express = require('express');

const routes = require('./routes/index');

const app = express();

app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`Server listening on port ${PORT}.`);
});
