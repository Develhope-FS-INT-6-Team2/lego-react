const admin = require('firebase-admin');
const serviceAccount = require('./lego-react-1afba-firebase-adminsdk-ko1xv-6d3b6d2dd7.json'); // replace with the path to your service account key file
const data = require('./Products.json'); // replace with the path to your Products.json file

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const uploadData = async () => {
    const batch = db.batch();

    data.sets.forEach((item) => {
        const docRef = db.collection('products').doc();
        batch.set(docRef, item);
    });

    await batch.commit();
    console.log('Data uploaded successfully');
};

uploadData();
