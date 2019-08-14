const express = require('express');

const routes = express.Router();

const DevController = require('./controlers/DevController');
const LikeController = require('./controlers/LikeController');
const DislikeController = require('./controlers/DislikeController');

//GET, POST, PUT, DELETE
routes.get('/', (req, res) => {
    return res.send({ "message": `Olá ${req.query.name}`});
});

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);


module.exports = routes;