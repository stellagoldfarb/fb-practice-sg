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
// adde each restaurant
db.collection("restaurants")
  .add(restuarants[0])
  .then((doc) => {
    console.log("Added restaurant", doc.id);
  })
  .catch((err) => {
    console.error(err);
  });
