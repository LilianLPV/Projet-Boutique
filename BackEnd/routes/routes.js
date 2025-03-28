
const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");



/*  

EXEMPLE DE ROUTE  "route", controllers.fonction  
router.get("/sneakers", controllers.getSneakers);
router.get("/sneakers/:id", controllers.getSneakersById);
*/

module.exports = router