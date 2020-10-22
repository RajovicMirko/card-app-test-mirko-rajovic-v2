const db = require("../");
const Cards = db.cards;

// Retrieve all Cards from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await Cards.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving cards."
    });
  }
};

// Create and Save a new Card
exports.create = async (req, res) => {
  // Validate request
  const { fullName, cardNumber, expDate } = req.body;
  if (!fullName || !cardNumber || !expDate) {
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
      message: error.message || "Some error occurred while creating the Tutorial."
    });
  }
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
        message: err.message || "Some error occurred while removing all Cards."
      });
    });
};

// Find a single Card with an id
exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Cards.findById(id);

    if (!data) {
      res.status(404).send({ message: "Not found Cards with id " + id });
    } else {
      res.status(200).send(data);
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error retrieving Cards with id=" + id
    }); 
  }
};

// Update a Card by the id in the request
exports.update = async (req, res) => {
  const { fullName, cardNumber, expDate } = req.body;

  if (!fullName || !cardNumber || !expDate) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;
  console.log(req.body);

  try {
    const data = await Cards.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
    if (!data) {
      res.status(404).send({
        message: `Cannot update Cards with id=${id}. Maybe Card was not found!`
      });
    } else {
      res.status(200).send(data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error.message || `Error updating Card with id=${id}`
    });
  }
};

// Delete a Card with the specified id in the request
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Cards.findByIdAndRemove(id);
    if (!data) {
      res.status(404).send({
        message: `Cannot delete Card with id=${id}. Maybe Card was not found!`
      });
    } else {
      res.send({
        message: "Card was deleted successfully!"
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Could not delete Card with id=" + id
    }); 
  }
};
