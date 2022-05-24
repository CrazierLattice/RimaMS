import express from 'express';
import { sqlQuery } from '../dbconfig.js';
import { v4 as uuidv4 } from 'uuid';
import bcryptjs from 'bcryptjs';

const registerRoute = express.Router();

registerRoute.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(402).send({ message: 'All fields are required' });
  try {
    const hashedPassword = bcryptjs.hashSync(password);
    console.log(hashedPassword);
    const registerQuery =
      'INSERT INTO accounts (id,username,password) VALUES(?,?,?)';
    const userId = uuidv4();
    await sqlQuery(registerQuery, userId, username, hashedPassword);
    res.status(200).send({ message: 'Registered Successfully!' });
  } catch (error) {
    res.status(402).send({ error });
  }
});

export default registerRoute;
