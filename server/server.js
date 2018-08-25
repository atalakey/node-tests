const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/json', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([
    { name: 'Mike', age: 27 },
    { name: 'John', age: 20 },
    { name: 'Jen', age: 26 }
  ]);
});

app.listen(3000);

module.exports.app = app;
