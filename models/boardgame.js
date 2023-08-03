const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 3
    }
  }, {
    timestamps: true
});

const boardgameSchema = new Schema({
    name: { 
      type: String, 
      required: true 
    },
    yearpublished: {
      type: Number,
      required: true
    },
    minplayers: {
      type: Number
    },
    maxplayers: {
      type: Number
    },
    minplaytime: {
      type: Number
    },
    maxplaytime: {
      type: Number
    },
    description: {
      type: String
    },
    image: {
      type: String
    },
    reviews: [reviewSchema]
  }, {
    timestamps: true
});
  
  module.exports = mongoose.model('Boardgame', boardgameSchema);