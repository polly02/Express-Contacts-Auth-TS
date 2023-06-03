import express, { Request, Response } from 'express';
import { buildResponse } from '../helper/buildResponse';
import { handleError } from '../helper/handleError';
import { createStudent, doAuthorisation  } from '../service/student.service';
import { createToken, createCookie } from '../helper/jwt';

const route = express.Router();

route.post('/reg', async function (req: Request, res: Response) {
    try {
        const { email, pwd } = req.body;
        const data = await createStudent(email, pwd);
        buildResponse(res, 200, data);
    } catch (error) {
        handleError(res, 404, error.message);
    }
});

route.post('/auth', async function (req: Request, res: Response) {
    try {
        const { email, pwd } = req.body;
        const data = await doAuthorisation(pwd, email);

        const token = createToken(data)

        res.setHeader('auth', [createCookie(token)])


        buildResponse(res, 200, data);
    } catch (error) {
        handleError(res, 404, error.message);
    }
});

export default route;