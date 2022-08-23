const express = require('express');
const PORT = 3000;
const app = express();
const path = require('path');
//const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors());

app.use(express.static(path.resolve(__dirname, '../dist')));

//catch-all route handler for any requests to an unknown route
app.get('*', (req, res) => {
  return res.status(404).send('This is an unknown URL.');
});

//global error handlings
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught an unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

//listen on port
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = { app };
