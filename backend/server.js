import express, { json } from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/OrderRoute.js";
const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();
app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use('/api/order',orderRouter)

app.get("/", (req, res) => {
  res.send("api working");
});

app.listen(port, () => console.log("server listing to port: ", port));
