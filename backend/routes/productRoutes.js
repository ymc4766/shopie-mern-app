import express from "express";
import {
  createProduct,
  createProductReview,
  deleteProduct,
  getProductDetails,
  getProducts,
  updateProduct,
} from "../controllers/productControllers.js";
import { isAuthenticatedUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getProducts);
router.route("/create").post(createProduct);
router
  .route("/:id")
  .get(getProductDetails)
  .put(updateProduct)
  .delete(isAuthenticatedUser, deleteProduct);

router.route("/create/review").put(createProductReview);

export default router;
