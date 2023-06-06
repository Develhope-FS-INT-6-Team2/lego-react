const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://tester:1234@lego-db.lssxr4t.mongodb.net/?retryWrites=true&w=majority";

async function run() {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await client.connect();
    const database = client.db("products");
    const collection = database.collection("_product");
    const docCount = await collection.countDocuments({});
    console.log(docCount);
    // perform actions using client
  } finally {
    await client.close();
  }
}

run().catch(console.dir);