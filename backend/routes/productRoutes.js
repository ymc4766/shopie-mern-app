import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductDetails,
  getProducts,
  updateProduct,
} from "../controllers/productControllers.js";
import { isAuthenticatedUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(isAuthenticatedUser, getProducts);
router.route("/create").post(createProduct);
router
  .route("/:id")
  .get(getProductDetails)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;
