import express from 'express';
import { getUsers, createUser } from '../controller/userController';

const router = express.Router();

router.route('/').get(getUsers).post(createUser);

export default router;