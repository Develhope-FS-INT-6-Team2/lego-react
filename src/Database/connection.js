const mongoose = require('mongoose');
const Order = require('../models/order');
const Product = require('../models/product');
const User = require('../models/user')
mongoose.set('debug', true);


const express = require('express');
const cors = require('cors');


const app = express();
const PORT = 3010;



app.use(express.json());
app.use(cors()); // Enable CORS for all routes


async function connectToDatabase() {
  try {
      await mongoose.connect('mongodb+srv://tester:1234@lego-db.lssxr4t.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false, // Disable the buffering of commands
      
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}



async function  getAllProducts(){
    let resultArray = [];
  
    await Promise.all([Order.init(), Product.init(), User.init()])
      .then(async () => {
        console.log('Schema uploaded successfully');

        const result = await Product.find({});
  
        await result.forEach((item)=>{ console.log(item); resultArray.push(item)});
        
        //process.exit(0);
      })
      .catch((error) => {
        console.error('Error uploading schema', error);
        process.exit(1);
      });
    return resultArray;
    
}

async function  getProductById(pId){
  let resultArray = [];

  await Promise.all([Order.init(), Product.init(), User.init()])
    .then(async () => {
      console.log('Schema uploaded successfully');

      const result = await Product.find({id:pId});

      await result.forEach((item)=>{ console.log(item); resultArray.push(item)});
      
    })
    .catch((error) => {
      console.error('Error uploading schema', error);
      process.exit(1);
    });
  return resultArray;
  
}


app.get('/getAllProducts',async (req,res)=>{
  console.log("Recieved getAllProducts");
  let result = await getAllProducts();
  res.json(result);
})

app.get('/getProductById',async (req,res)=>{
  console.log("Recieved getProductById");
  let result = await getProductById(req.body.id);
  res.json(result);
})

//register //post
//login    //post

//getWhishlistByUserID //get
//AddproductToWhishlist

//addOrder
//cancelOrder



app.listen(PORT, ()=>{
  console.log("Server has started at port",PORT,"you can Go to link from here "+`http://localhost:${PORT}`);
  connectToDatabase();
})


/*
connectToDatabase().then(() => {
  Promise.all([Order.init(), Product.init(), User.init()])
    .then(async () => {
      console.log('Schema uploaded successfully');

      await Product.insertMany(productsData).then(()=>{
        console.log("Added successfully");
      }).catch((error)=>{
        console.log("Error");

      });


      const result = await Product.find({});

      result.forEach((item)=>{ console.log(item)});

      //process.exit(0);
    })
    .catch((error) => {
      console.error('Error uploading schema', error);
      process.exit(1);
    });
});
*/
/*
connectToDatabase().then(async () => {
  try {
    await Product.init();
    console.log('Product schema initialized');
    

    await Product.insertMany(productsData).then(()=>{
      console.log("Added successfully");
    }).catch((error)=>{
      console.log("Error");

    });

    console.log('Products added successfully');
    console.log('Insert result:', result);

    const insertedProducts = await Product.find();
    console.log('Inserted products:', insertedProducts);

    process.exit(0);
  } catch (error) {
    console.error('Error adding products', error);
    console.error(error.stack);
    process.exit(1);
  }
});*/
