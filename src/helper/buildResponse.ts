import { Response } from 'express';
// import { iTask, iUser } from '../interfaces/interfaces';

function buildResponse(res: Response, status: number, message: any) {
    res.status(status);
    res.send(message);
}

export { buildResponse };