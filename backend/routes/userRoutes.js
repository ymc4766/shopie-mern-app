import express from "express";
import {
  allUsers,
  deleteUser,
  forgotPassword,
  loginUser,
  logout,
  registerUser,
  resetPassword,
} from "../controllers/userControllers.js";
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/auth").post(loginUser);
router.route("/logout").get(logout);
router.route("/:id").delete(deleteUser);

router.route("/").get(allUsers);

router.route("/password/forgot").post(forgotPassword);
router.route("/api/password/reset/:token").put(resetPassword);

export default router;
