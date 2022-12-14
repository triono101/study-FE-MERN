const express = require("express");
require("dotenv").config({ path: "./.env" });
const cors = require("cors");
const connectDB = require("./config/db");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
