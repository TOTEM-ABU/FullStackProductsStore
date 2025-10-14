import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import couponsRoutes from "./routes/coupons.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";

import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponsRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(5000, () => {
  console.log("Server is running on http://localhost:" + PORT);
  connectDB();
});
