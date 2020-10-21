module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      fullName: String,
      cardNumber: String,
      expDate: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Cards = mongoose.model("cards", schema);
  return Cards;
};