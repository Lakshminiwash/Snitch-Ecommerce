import { Router } from "express";
import { validateLoginUser, validateRegisterUser } from "../validator/auth.validator.js";
import { Login, Register } from "../Controllers/auth.controller.js";

const router = Router()

router.post("/register",validateRegisterUser,Register)
router.post("/login",validateLoginUser,Login)

export default router;