import express from "express";
import {
  handelLoginUser,
  handelSignUpUser,
} from "../controllers/user_controllers.js";

const router = express.Router();

router.post("/login", handelLoginUser);
router.post("/signup", handelSignUpUser);

export default router;
