const { Router } = require('express');
const getTypes = require('../controller/getAllTypes');

const typeRoutes = Router()

typeRoutes.get("/",getTypes)

module.exports = typeRoutes