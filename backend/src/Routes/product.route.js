import express from "express"
import { authenticateSeller } from "../middleWares/auth.middleWare.js"
import { createProductValidator } from "../validator/product.validator.js"
import { createProduct, getSellerProducts } from "../Controllers/product.controller.js"
import multer from "multer"

const upload = multer({
    storage:multer.memoryStorage(),
    limits:{
        fileSize:5*1024*1025    // 5 mb
    }
})

const router = express.Router()

router.post("/",authenticateSeller,upload.array('images',7),createProductValidator,createProduct)
router.get("/seller",authenticateSeller,getSellerProducts)

export default router