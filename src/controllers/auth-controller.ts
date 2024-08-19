import {NextFunction, Request, Response} from "express";
import {User} from "../models/user";
import {BadRequestError} from "../errors/bad-request-error";
import jwt from 'jsonwebtoken'
import {Password} from "../middlewares/password";

const JWT_SECRET = 'jwt_secret';

export const singUp = async (req: Request, res: Response, next: NextFunction) => {

    const {email, password} = req.body;
    const existingUser = await User.findOne({email})

    if (existingUser) {
        throw new BadRequestError("User with the given email already exists");
    }

    const user = User.build({email, password});

    await user.save();

    const userJwt = generateJwt(user.id, email)

    req.session = {
        jwt: userJwt,
    }

    res.status(201).send(user);
}

export const signIn = async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body;
    const existingUser = await User.findOne({email});
    if (!existingUser) {
        throw new BadRequestError("invalid credentials");
    }
    const passwordMatch = await Password.comparePassword(existingUser.password, password)

    if (!passwordMatch) {
        throw new BadRequestError("invalid credentials");
    }

    const userJwt = generateJwt(existingUser.id, existingUser.email)

    req.session = {
        jwt: userJwt,
    }
    res.status(200).json({token: userJwt, userId: existingUser.id});
}

export const signOut = async (req: Request, res: Response, next: NextFunction) => {
    req.session = {}
    res.send({})
}

const generateJwt = (id: string, email: string) => {
    return jwt.sign({
        id,
        email
    }, JWT_SECRET)
}