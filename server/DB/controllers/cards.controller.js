const db = require("../");
const Cards = db.cards;

// Create and Save a new Card
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.fullName) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Card
  const card = new Cards({ ...req.body });
  
  // Save Card in the database
  try {
    const data = await card.save(card);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Tutorial."
    });
  }
};

// Retrieve all Cards from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Cards.find(condition)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cards."
      });
    });
};

// Find a single Card with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Cards.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Cards with id " + id });
      else res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Cards with id=" + id });
    });
};

// Update a Card by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;
  Cards.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Cards with id=${id}. Maybe Card was not found!`
        });
      } else {
        res.status(200).send(data);
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Card with id=${id}`
      });
    });
};

// Delete a Card with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Cards.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Card with id=${id}. Maybe Card was not found!`
        });
      } else {
        res.send({
          message: "Card was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Card with id=" + id
      });
    });
};

// Delete all Cards from the database.
exports.deleteAll = (req, res) => {
  Cards.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Cards were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Cards."
      });
    });
};
