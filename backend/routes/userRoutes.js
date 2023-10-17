import express from "express";
import {
  allUsers,
  deleteUser,
  forgotPassword,
  getUserProfile,
  loginUser,
  logout,
  registerUser,
  resetPassword,
  updatePassword,
} from "../controllers/userControllers.js";
import { isAuthenticatedUser } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/auth").post(loginUser);
router.route("/logout").get(logout);
router.route("/:id").delete(deleteUser);

router.route("/").get(allUsers);

router.route("/password/forgot").post(forgotPassword);
// router.route("/password/reset/:token").put(resetPassword);
router.route("/password/reset/:token").put(resetPassword);

router.route("/me").get(isAuthenticatedUser, getUserProfile);
// router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);

export default router;
