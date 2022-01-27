// import our restuarnts
const restuarants = require("./restaurants.json");

//import a set of tools to talk to firebase and Firestore
const {
  initializeApp,
  cert,
} = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

// import our credentials
const credentials = require("./credentials.json");
// const { initializeApp } = require("firebase-admin");

// connect to firebase services
initializeApp({
  credential: cert(credentials)
});

// connect to firestore
const db = getFirestore();

// create a collection called "restaurants"
const restRef = db.collection('restaurants')


//add each restaurant
restRef.add(restuarants[3])
 .then((doc) => {
 console.log("Added restaurant", doc.id);
})
.catch((err) => {
  console.error(err);
});

// read one document
restRef.doc('WcvWvg0yYiKBbctqKE8u').get()
 .then(doc => {
   console.log(doc.id, ' =>', doc.data());
})
 .catch(err => comsole.error);

// get all documents
restRef.get()
 .then (snapshot => {
  snapshot.forEach(doc => {
          console.log(doc.id, ' => ', doc.data());
   })
})
 .catch(console.error);

  // find a document(s)
  //querying a collection
restRef.where('name','==','Bolay').get()
.then(snapshot => {
    snapshot.forEach(doc => {
        console.log(doc.data())
    });
})  
.catch(console.error)

