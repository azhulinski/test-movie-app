import {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'jwt_secret';

interface UserPayload {
    id: string;
    email: string;
}

declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}

export const currentUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.session?.jwt) {
        return next();
    }

    try {
        req.currentUser = jwt.verify(
            req.session.jwt,
            JWT_SECRET
        ) as UserPayload;
    } catch (err) {}

    next();
};
