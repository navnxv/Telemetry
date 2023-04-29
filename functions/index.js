const functions = require("firebase-functions");
const cors = require("cors");

const corsHandler = cors({origin:true});

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    corsHandler(request, response, () => {
        response.send("Hello from Firebase!");
    });
});
