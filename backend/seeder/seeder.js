import mongoose from "mongoose";
import dotenv from "dotenv";

import Product from "../models/productModel.js";
import { products } from "./data.js";
import db from "../config/db.js";

dotenv.config();
db();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("Products are added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
