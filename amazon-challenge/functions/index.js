const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51O71w1GORs4nLlbGE2lzxKRjXxo"+
"sGO3gq1wDxe5koyMA1AKDlZZ7X4onsTN"+
"165UNWRHjf5WxxtHoHdUHDQu3o9cd00MJS7HYQl");
const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).send("hello world");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received BOOM!!! for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
