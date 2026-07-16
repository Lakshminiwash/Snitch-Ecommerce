import { body, validationResult } from "express-validator";

function validateRequest(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array().map(error => error.msg) })
    }
    next()

}

export const validateRegisterUser = [
    body("email")
        .isEmail().withMessage("Invalid email Format"),
    body("contact")
        .notEmpty().withMessage("Contact is required")
        .matches(/^\d{10}$/).withMessage("Contact must be 10 digit number"),
    body("password")
        .isLength({ min: 6 }).withMessage("password must be at least 6 charactor long"),
    body("fullname")
        .notEmpty().withMessage("Full name is required")
        .isLength({ min: 3 }).withMessage("Full name must be at least 3 character long"),
    body("isSeller")
        .isBoolean().withMessage("isSeller must be a boolean value"),

    validateRequest
]

export const validateLoginUser = [
    body("email")
        .isEmail().withMessage("Invalid email format"),
    body("password")
        .notEmpty().withMessage("valid password is required"),

    validateRequest
]