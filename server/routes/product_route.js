import { getProductOnQuery,getAllProducts } from "../controllers/product_controllers.js";
import express from "express";

const router = express.Router();

// Search and Filter
router.get('/',getAllProducts)
router.get("/search", getProductOnQuery);

export default router;
