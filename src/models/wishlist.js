const mongoose = require('mongoose');

const { Schema } = mongoose;


const wishlistSchema = new mongoose.Schema({
  wishlist: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;