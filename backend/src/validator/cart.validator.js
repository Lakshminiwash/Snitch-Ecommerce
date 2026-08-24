import { param, body, validationResult } from "express-validator"

const validateRequest = (req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    next()
}

export const validateAddToCart = [
    param("productId").isMongoId().withMessage("invalid product Id"),
    param("variantId").optional().isMongoId().withMessage("invalid variant id"),
    body("quantity").optional().isInt({min:1}).withMessage("quantity must have at least 1"),
    validateRequest
]

export const validateIncrementCartItemQuantity = [
    param("productId").isMongoId().withMessage("invalid product Id"),
    param("variantId").optional().isMongoId().withMessage("invalid variant Id"),
    validateRequest
]