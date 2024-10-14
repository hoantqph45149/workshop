import { Router } from "express";
import { CreateProduct, getProducts } from "../controllers/product.js";

const router = Router();

router.get("/products", getProducts);
router.post("/products", CreateProduct);
export default router;
