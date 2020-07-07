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
    id: 1,
    name: 'Denis',
    bio: 'student',
    age: '26',
  },
  {
    id: 2,
    name: 'John',
    bio: 'teacher',
    age: 35,
  },
];

server.get('/api/users', (req, res) => {
  res.json(users);
});

server.get('/api/users/:id', (req, res) => {
  const user = users.find((user) => user.id == req.params.id);
  console.log(user);
  if (!user) {
    return res.status(404).json({ Message: 'user not found' });
  }

  try {
    user;
  } catch {
    res.status(500).json({ errorMessage: 'The user could not be removed' });
  }
});

server.post('/api/users', (req, res) => {
  const { bio, name } = req.body;
  if (!bio || !name) {
    return res.status(400).json({ BadRequest: 'please enter a name and bio for the user' });
  } else {
    res.status(201).json({ created: req.body });
  }
});

server.put('/api/users/:id', (req, res) => {});

server.delete('/api/users/:id', (req, res) => {});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
