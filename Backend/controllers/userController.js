import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import validator from "validator"
import bcrypt from "bcrypt"
import mongoose from "mongoose";

// User login fx
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({email})

        if (!user) {
            return res.json({ success: false, message: "User does not exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Credentials" })
        }

        const token = await createToken(user._id)
        res.json({ success: true, token })
    }
    catch (error) {
        res.json({ success: false, error })
    }
}

// Fx Creating token
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// User register fx
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Checking that your already created
        const exist = await userModel.findOne({ email })   //{email} is same as {email:email}
        if (exist) {
            return res.json({ success: false, message: "User Already Exist" })
        }

        // Validating email and strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a passoword of min length 8" })
        }

        // Hashing password before saving it to the DB (Hashing user password )

        // NOTE/LEARNING:- Hashing is one-way and encryption is two-way. means we cannot get original data after hashing but can get the same data again in encryption hashing is use for like password and encryption is used for transfer data.
        const hashedPassword = await bcrypt.hash(password, 10);

        // Creating new user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save()
        const token = await createToken(user._id)
        res.json({ success: true, token: token })




    } catch (error) {
        res.json({ success: false, Error: error })

    }

}

export { loginUser, registerUser }