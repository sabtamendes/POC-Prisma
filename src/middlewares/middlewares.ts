import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export async function schemaValidate(schema: ObjectSchema, type: "body" ) {

    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req[type], {
            abortEarly: false,
        });

        if (error) {
            const errors = error.details.map((detail) => detail.message);
            return res.status(422).send(errors);
        }
        return next();
    }
};
