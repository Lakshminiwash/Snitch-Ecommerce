import { Router } from "express";
import { validateRegisterUser } from "../validator/auth.validator.js";
import { Register } from "../Controllers/auth.controller.js";

const router = Router()

router.post("/register",validateRegisterUser,Register)

export default router;