const express = require("express");
const app = express();
const cors = require("cors");

// middlewares
app.use(express.json());
app.use(cors());

const triRoute = require("./routes/tri");
app.use(triRoute);

app.listen(8080, () => {
  console.log("Server has started");
});
