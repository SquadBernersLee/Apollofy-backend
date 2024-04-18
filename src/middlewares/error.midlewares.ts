import {NextFunction, Request, Response} from 'express'
import {InsufficientScopeError, InvalidTokenError, UnauthorizedError,} from "express-oauth2-jwt-bearer";

const errorHandler = async (error: any, req: Request, response: Response, next: NextFunction) => {
    if (error instanceof InsufficientScopeError) {
        const message = "Permission denied";

        response.status(error.status).json({message});

        return;
    }

    if (error instanceof InvalidTokenError) {
        const message = "Bad credentials";

        response.status(error.status).json({message});

        return;
    }

    if (error instanceof UnauthorizedError) {
        const message = "Requires authentication";

        response.status(error.status).json({message});

        return;
    }

    const status = 500;
    const message = "Internal Server Error";

    response.status(status).json({message});
}

export default errorHandler
