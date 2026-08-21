import express from "express"
import { authenticateUser } from "../middleWares/auth.middleWare"
import { addToCart, getCart } from "../Controllers/cart.controller"
import { validateAddToCart } from "../validator/cart.validator"

const router = express.Router()


router.post("/add/:productId/:variantId",authenticateUser,validateAddToCart,addToCart)
router.get("/",authenticateUser,getCart)

export default router