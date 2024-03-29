const express = require("express");
const app = express();
const cors = require("cors");
// middleware
app.use(cors());
app.use(express.json());

//ROUTES//

// register and login routes
app.use("/auth", require("../server/routes/jwtAuth"));

//Dashboard Routes
app.use("/dashboard", require("../server/routes/dashboard"));
app.listen(5000, () => {
  console.log("Server started at port 5000");
});
