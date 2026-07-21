import { body , validationResult } from "express-validator";

function validationRequest(req,res,next){
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({message:"validation error" , errors:errors.array().map(error => error.msg)})
    }
    next()
}

export const createProductValidator = [
    body("title").notEmpty().withMessage("title is required"),
    body("description").notEmpty().withMessage("description is required"),
    body("priceAmount").isNumeric().withMessage("Price amount must be a number"),
    body("priceCurrency").notEmpty().withMessage("price currency is required"),

    validationRequest
]