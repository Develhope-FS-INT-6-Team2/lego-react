

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    pieces: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });
  
  const Product= mongoose.model('Product', productSchema);
  
  module.exports =  Product;



  //     const productsToAdd = [{
  //     "image": "../assets/images/featured-sets/cat-hotel.png",
  //     "title": "Cat hotel",
  //     "price": 59.99,
  //     "category": "Pets",
  //     "id":1,
  //     "pieces":233,
  //     "date": new Date(),
  // },
  // {
  //     "image": "../assets/images/featured-sets/jazz-club.png",
  //     "title": "Jazz-club",
  //     "price": 79.99,
  //     "category": "Music",
  //     "id":2,
  //     "pieces":233,
  //     "date": new Date(),

  // },
  //     {
  //       "image": "../assets/images/featured-sets/golden-ultra-dragon.png",
  //       "title": "Golden Ultra Dragon",
  //       "price": 109.99,
  //       "category": "Toys",
  //       "id":3,
  //       "pieces":233,
  //       "date": new Date(),
  //   },
  //   {
  //       "image": "../assets/images/featured-sets/grand-piano.png",
  //       "title": "Grand Piano",
  //       "price": 39.99,
  //       "category": "Music",
  //       "id":4,
  //       "pieces":233,
  //       "date": new Date(),
  //   },
  //   {
  //       "image": "../assets/images/featured-sets/star-lord-helmet.png",
  //       "title": "Star Lord Helmet",
  //       "price": 45.99,
  //       "category": "Movies",
  //       "id":5,
  //       "pieces":233,
  //       "date": new Date(),
  //   },
  //   {
  //       "image": "../assets/images/featured-sets/tie-bomber.png",
  //       "title": "Tie Bomber",
  //       "price": 59.99,
  //       "category": "Toys",
  //       "id":6,
  //       "pieces":233,
  //       "date": new Date(),
  //   },
  //   {
  //       "image": "../assets/images/featured-sets/eiffel-tower.png",
  //       "title": "Eiffel Tower",
  //       "price": 109.99,
  //       "category": "Travel",
  //       "id":7,
  //       "pieces":233,
  //       "date": new Date(),
  //   },
  //   {
  //       "image": "../assets/images/featured-sets/titanic.png",
  //       "title": "Titanic",
  //       "price": 79.99,
  //       "category": "Movies",
  //       "id":8,
  //       "pieces":233,
  //       "date": new Date(),
  //   },
  //   {
  //       "image": "../assets/images/featured-sets/van-gogh.png",
  //       "title": "Van Gogh",
  //       "price": 39.99,
  //       "category": "Art",
  //       "id":9,
  //       "pieces":233,
  //       "date": new Date(),
  //   },
  //   {
  //       "image": "../assets/images/featured-sets/hogwarts-room-of-requirement.png",
  //       "title": "Hogwarts Room of Requirements",
  //       "price": 59.99,
  //       "category": "Toys",
  //       "id":10,
  //       "pieces":233,
  //       "date": new Date(),
  //   },
  //   {
  //       "image": "../assets/images/featured-sets/temple-of-the-golden-idol.png",
  //       "title": "Temple of The Golden Idol",
  //       "price": 59.99,
  //       "category": "Toys",
  //       "id":11,
  //       "pieces":233,
  //       "date": new Date(),
  //   },
  //   {
  //       "image": "../assets/images/featured-sets/the-razor-crest.png",
  //       "title": "The Razor Crest",
  //       "price": 59.99,
  //       "category": "Movies",
  //       "id":12,
  //       "pieces":233,
  //       "date": new Date(),
  //   },
  //   {
  //       "image": "../assets/images/recommended/emperor-throne.png",
  //       "title": "Emperor's Throne Room™ Diorama",
  //       "price": 89.99,
  //       "category": "Movies",
  //       "id":13,
  //       "pieces":807,
  //       "date": new Date(),
  //   },
  //   {
  //       "image": "../assets/images/recommended/endor-speeder.png",
  //       "title": "Endor™ Speeder Chase Diorama",
  //       "price": 69.99,
  //       "category": "Movies",
  //       "id":14,
  //       "pieces":763,
  //       "date": new Date(),
  //   },
  //   {
  //       "image": "../assets/images/recommended/mandalorian-fang-figther.png",
  //       "title": "Mandalorian Fighter vs. TIE™",
  //       "price": 89.99,
  //       "category": "Movies",
  //       "id":15,
  //       "pieces":957,
  //       "date": new Date(),
   
  //   },
  //   {
  //       "image": "../assets/images/recommended/starfighter.png",
  //       "title": "X-Wing Starfighter™",
  //       "price": 209.99,
  //       "category": "Movies",
  //       "id":16,
  //       "pieces":1949,
  //       "date": new Date(),
  //   },
  //   {
  //       "image": "../assets/images/recommended/spider-tank.png",
  //       "title": "Spider Tank",
  //       "price": 39.99,
  //       "category": "Movies",
  //       "id":17,
  //       "pieces":526,
  //       "date": new Date(),
  //   },
  //   {
  //       "image": "../assets/images/recommended/battle-endor-heros.png",
  //       "title": "Battle of Endor™ Heroes",
  //       "price": 39.99,
  //       "category": "Movies",
  //       "id":18,
  //       "pieces":549,
  //       "date": new Date(),
  //   },
 
  //   {
  //       "image": "../assets/images/recommended/vader-keyring.png",
  //       "title": "Darth Vader™ Keyring",
  //       "price": 4.99,
  //       "category": "Keyring",
  //       "id":19,
  //       "pieces":1,
  //       "date": new Date(),
  //   },
  
  //   {
  //       "image": "../assets/images/recommended/mermaid.png",
  //       "title": "The Little Mermaid Royal Clamshell",
  //       "price": 139.99,
  //       "category": "toys",
  //       "id":20,
  //       "pieces":624,
  //       "date": new Date(),
  //   },
  //   {
  //       "image": "../assets/images//recommended/peugeot.png",
  //       "title": "PEUGEOT 9X8 Hybrid Hypercar",
  //       "price": 7169.99,
  //       "category": "Car",
  //       "id":21,
  //       "pieces":726,
  //       "date": new Date(),
  //   },
  //   {
  //       "image": "../assets/images/recommended/land-rover.png",
  //       "title": "Land Rover Classic Defender 90",
  //       "price": 209.99,
  //       "category": "Car",
  //       "id":22,
  //       "pieces":631,
  //       "date": new Date(),
  //   },
  
  
  //   {
  //       "image": "../assets/images/recommended/tales-space.png",
  //       "title": "Tales of the Space Age",
  //       "price": 59.99,
  //       "category": "Space",
  //       "id":23,
  //       "pieces":688,
  //       "date": new Date(),
  //   },
  
  //   {
  //       "image": "../assets/images/recommended/disney-100.png",
  //       "title": "LEGO® Minifigures Disney 100",
  //       "price": 3.99,
  //       "category": "Toys",
  //       "id":24,
  //       "pieces":8,
  //       "date": new Date(),
  //   }]