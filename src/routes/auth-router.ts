import express from "express";
import {signIn, signOut, singUp} from "../controllers/auth-controller";
import {body} from "express-validator";
import {validateRequest} from "../middlewares/validate-request";

const router = express.Router();

router.post("/api/users/signup", [
        body("email")
            .isEmail()
            .withMessage('Email must be valid'),
        body("password")
            .trim()
            .notEmpty()
            .withMessage('Password is required')
    ],
    validateRequest,
    singUp)

router.post("/api/users/signin",
    [
        body("email")
            .isEmail()
            .withMessage('Email must be valid'),
        body("password")
            .trim()
            .notEmpty()
            .withMessage('Password is required')
    ],
    validateRequest,
    signIn)

router.post("/api/users/signout", signOut)

export {router as authRouter};