module.exports = app => {
  const cards = require("../controllers/cards.controller.js");
  var router = require("express").Router();

  router.post("/", cards.create); // Create a new
  router.get("/", cards.findAll); // Retrieve all
  router.get("/:id", cards.findOne); // Retrieve single with id
  router.put("/:id", cards.update); // Update with id
  router.delete("/:id", cards.delete); // Delete with id
  router.delete("/", cards.deleteAll); // Delete all

  app.use('/api/cards', router);
};