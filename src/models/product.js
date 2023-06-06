

const MongoClient = require('mongodb').MongoClient;



const products = 'products';
const productsData= 
     [
        {
            "image": "../assets/images/featured-sets/cat-hotel.png",
            "title": "Cat hotel",
            "price": 59.99,
            "category": "Pets",
            "id":1,
            "pieces":233
        },
        {
            "image": "../assets/images/featured-sets/jazz-club.png",
            "title": "Jazz-club",
            "price": 79.99,
            "category": "Music",
            "id":2

        },
        {
            "image": "../assets/images/featured-sets/golden-ultra-dragon.png",
            "title": "Golden Ultra Dragon",
            "price": 109.99,
            "category": "Toys",
            "id":3
        },
        {
            "image": "../assets/images/featured-sets/grand-piano.png",
            "title": "Grand Piano",
            "price": 39.99,
            "category": "Music",
            "id":4
        },
        {
            "image": "../assets/images/featured-sets/star-lord-helmet.png",
            "title": "Star Lord Helmet",
            "price": 45.99,
            "category": "Movies",
            "id":5
        },
        {
            "image": "../assets/images/featured-sets/tie-bomber.png",
            "title": "Tie Bomber",
            "price": 59.99,
            "category": "Toys",
            "id":6
        },
        {
            "image": "../assets/images/featured-sets/eiffel-tower.png",
            "title": "Eiffel Tower",
            "price": 109.99,
            "category": "Travel",
            "id":7
        },
        {
            "image": "../assets/images/featured-sets/titanic.png",
            "title": "Titanic",
            "price": 79.99,
            "category": "Movies",
            "id":8
        },
        {
            "image": "../assets/images/featured-sets/van-gogh.png",
            "title": "Van Gogh",
            "price": 39.99,
            "category": "Art",
            "id":9
        },
        {
            "image": "../assets/images/featured-sets/hogwarts-room-of-requirement.png",
            "title": "Hogwarts Room of Requirements",
            "price": 59.99,
            "category": "Toys",
            "id":10
        },
        {
            "image": "../assets/images/featured-sets/temple-of-the-golden-idol.png",
            "title": "Temple of The Golden Idol",
            "price": 59.99,
            "category": "Toys",
            "id":11
        },
        {
            "image": "../assets/images/featured-sets/the-razor-crest.png",
            "title": "The Razor Crest",
            "price": 59.99,
            "category": "Movies",
            "id":12
        },
        {
            "image": "../assets/images/recommended/emperor-throne.png",
            "title": "Emperor's Throne Room™ Diorama",
            "price": 89.99,
            "category": "Movies",
            "id":13,
            "pieces":807
        },
        {
            "image": "../assets/images/recommended/endor-speeder.png",
            "title": "Endor™ Speeder Chase Diorama",
            "price": 69.99,
            "category": "Movies",
            "id":14,
            "pieces":763
        },
        {
            "image": "../assets/images/recommended/mandalorian-fang-figther.png",
            "title": "Mandalorian Fighter vs. TIE™",
            "price": 89.99,
            "category": "Movies",
            "id":15,
            "pieces":957
       
        },
        {
            "image": "../assets/images/recommended/starfighter.png",
            "title": "X-Wing Starfighter™",
            "price": 209.99,
            "category": "Movies",
            "id":16,
            "pieces":1949
        },
        {
            "image": "../assets/images/recommended/spider-tank.png",
            "title": "Spider Tank",
            "price": 39.99,
            "category": "Movies",
            "id":17,
            "pieces":526
        },
        {
            "image": "../assets/images/recommended/battle-endor-heros.png",
            "title": "Battle of Endor™ Heroes",
            "price": 39.99,
            "category": "Movies",
            "id":18,
            "pieces":549
        },
     
        {
            "image": "../assets/images/recommended/vader-keyring.png",
            "title": "Darth Vader™ Keyring",
            "price": 4.99,
            "category": "Keyring",
            "id":19,
            "pieces":1
        },
      
        {
            "image": "../assets/images/recommended/mermaid.png",
            "title": "The Little Mermaid Royal Clamshell",
            "price": 139.99,
            "category": "toys",
            "id":20,
            "pieces":624
        },
        {
            "image": "../assets/images//recommended/peugeot.png",
            "title": "PEUGEOT 9X8 Hybrid Hypercar",
            "price": 7169.99,
            "category": "Car",
            "id":21,
            "pieces":726
        },
        {
            "image": "../assets/images/recommended/land-rover.png",
            "title": "Land Rover Classic Defender 90",
            "price": 209.99,
            "category": "Car",
            "id":22,
            "pieces":631
        },
      
      
        {
            "image": "../assets/images/recommended/tales-space.png",
            "title": "Tales of the Space Age",
            "price": 59.99,
            "category": "Space",
            "id":23,
            "pieces":688
        },
      
        {
            "image": "../assets/images/recommended/disney-100.png",
            "title": "LEGO® Minifigures Disney 100",
            "price": 3.99,
            "category": "Toys",
            "id":24,
            "pieces":8
        }
    ]


    // Replace the connection string with your MongoDB connection string
    const uri = 'mongodb+srv://tester:1234@lego-db.lssxr4t.mongodb.net/';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    client.connect(err => {
      if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
      }
    
      const collection = client.db('products').collection('_product');
    
      collection.insertMany(productsData)
        .then(result => {
          console.log('Data inserted successfully');
        })
        .catch(err => {
          console.error('Error inserting data:', err);
        })
        .finally(() => {
          client.close();
        });
    });
    