import express from "express"
import { authenticateSeller } from "../middleWares/auth.middleWare.js"
import { createProductValidator } from "../validator/product.validator.js"
import { addProductVarient, createProduct, getAllProtucts, getProductDetails, getSellerProducts } from "../Controllers/product.controller.js"
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
router.get("/",getAllProtucts)
router.get("/detail/:id",getProductDetails)
router.post("/:productId/variants",authenticateSeller,upload.array("images",7),addProductVarient)

export default router