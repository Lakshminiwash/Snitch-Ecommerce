import userModel from "../modals/user.model.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

async function sendTokenResponse(user, res, message) {

    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: "7d" });

    res.cookie("token", token)

    return res.status(201).json({
        message,
        success: true,
        user: {
            id: user._id,
            email: user.email,
            contact: user.contact,
            fullname: user.fullname,
            role: user.role
        }
    });
}

export const Register = async (req, res) => {
    const { email, contact, password, fullname, isSeller } = req.body;

    try {
        const existingUser = await userModel.findOne({
            $or: [
                { email },
                { contact }
            ]
        });

        if (existingUser) {
            return res.status(400).json({ message: "User with this email or contact already exists" });
        }

        const user = await userModel.create({
            email,
            contact,
            password,
            fullname,
            role: isSeller ? "seller" : "buyer"
        });

        return sendTokenResponse(user, res, "user registered successfully");
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "server error" });
    }
};


export const Login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(400).json({ message: "invalid email or password" })
        }

        const isMatched = await user.comparePassword(password)

        if (!isMatched) {
            return res.status(400).json({ message: "invalid email or password" })
        }

        return sendTokenResponse(user, res, "user logged in successfuly")
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "server error" })
    }
}

export const googleCallback = async (req, res) => {
    console.log(req.user)
    const { id, displayName, emails, photos } = req.user
    const email = emails[0].value;
    const profilePic = photos[0].value;

    let user = userModel.findOne({
        email
    })

    if (!user) {
        user = await userModel.create({
            email,
            googleId: id,
            fullName: displayName,
        })
    }

    const token = jwt.sign({
        id: user._id
    }, config.JWT_SECRET, {
        expiresIn: "7d"
    })

    res.cookie("token", token)

    res.redirect("http://localhost:5173/")
}

export async function getMe(req, res) {
    const user = req.user

    res.status(200).json({
        message: "user fetched successfully",
        success: true,
        user: {
            id: user._id,
            email: user.email,
            contact: user.contact,
            fullname: user.fullname,
            role: user.role
        }
    })
}
