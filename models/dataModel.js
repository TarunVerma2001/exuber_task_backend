const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A data must have a Name!'],
  },
  image: {
    type: String,
    require: [true, 'A data must have an image url!'],
  },
  price: {
    type: Number,
    require: [true, 'A data must have a price!'],
  },
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
