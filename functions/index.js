require("dotenv").config();
const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
const port = 3000;

const summarizeText = require("./summarize.js");

// Parse JSON bodies (as sent by API clients)
router.use(express.json());

router.use(express.static("public")); // Serve static files from the 'public' directory

// Handle POST requests to the '/summarize' endpoint
router.post("/summarize", (req, res) => {
  // get the text_to_summarize property from the request body
  const text = req.body.text_to_summarize;

  // call your summarizeText function, passing in the text from the request
  summarizeText(text)
    .then((response) => {
      res.send(response); // Send the summary text as a response
    })
    .catch((error) => {
      console.log(error.message);
    });
});

// Start the server
// app.listen(port, () => {
//   console.log("Server running at 3000");
// });
app.use("/", router);
module.exports.handler = serverless(app);
