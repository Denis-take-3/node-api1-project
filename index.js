// add express
const express = require('express');
// add a server instance
const server = express();
// teach express to read json
server.use(express.json());

// shortid
const shortid = require('shortid');

const users = [
  {
    id: shortid.generate(),
    name: 'Denis',
    age: '26',
  },
  {
    id: shortid.generate(),
    name: 'John',
    age: 35,
  },
];

server.get('/api/users', (req, res) => {
  res.json(users);
});

server.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((realId) => realId == id);
  
});

server.post('/api/users', (req, res) => {});

server.put('/api/users/:id', (req, res) => {});

server.delete('/api/users/:id', (req, res) => {});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
