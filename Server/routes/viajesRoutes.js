const express = require('express');

const routerViajes = express.Router();

routerViajes.post('/register', (req, res) => res.status(201).send({ success: true }));
// router.delete('/delete/:id', usersControllers.deleteUser);
// router.put('/update/:id', usersControllers.updateUser);
// router.get('/get-all', usersControllers.getUsers);
// router.get('/get-user/:id', usersControllers.getUser);

module.exports = routerViajes;
