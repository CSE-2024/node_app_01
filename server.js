const express = require('express');
const dotenv = require('dotenv');

const environment = process.env.NODE_ENV || 'development';
const envFile = `.env.${environment}`;

console.log(`Loading environment variables from ${envFile}`);
dotenv.config({ path: envFile });

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send(`Hello from ${environment} environment!`);
});

const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

app.get('/users', (req, res) => {
  res.json(users);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${environment} mode.`);
  });
}

module.exports = app;
