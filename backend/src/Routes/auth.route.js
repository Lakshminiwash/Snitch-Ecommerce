import { Router } from "express";
import { validateLoginUser, validateRegisterUser } from "../validator/auth.validator.js";
import { getMe, googleCallback, Login, Register } from "../Controllers/auth.controller.js";
import passport from "passport";
import { config } from "../config/config.js";
import { authenticateUser } from "../middleWares/auth.middleWare.js";

const router = Router()

// api/auth/register 
router.post("/register",validateRegisterUser,Register)
// api/auth/login 
router.post("/login",validateLoginUser,Login)
// api/auth/me 
router.get("/me",authenticateUser,getMe)


router.get("/google",
    passport.authenticate("google",{
        scope:["profile","email"]
    })
)
router.get("/google/callback",
    passport.authenticate("google",{
        session:false,
        failureRedirect:config.NODE_ENV === "development"? "http://localhost:5173/login" : "/login"
    }),
    googleCallback,
)

export default router;