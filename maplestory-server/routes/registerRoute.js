import express from 'express';
import { sqlQuery } from '../dbconfig.js';
import { v4 as uuidv4 } from 'uuid';
import bcryptjs from 'bcryptjs';

const registerRoute = express.Router();

registerRoute.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(402).send({ message: 'All fields are required' });

  if (username.length < 7)
    return res
      .status(402)
      .send({ message: 'Username must be atleast 8 characters' });
  if (password.length < 7)
    return res
      .status(402)
      .send({ message: 'Password must be atleast 8 characters' });
  try {
    const findIfUserExistsQuery =
      'SELECT username FROM accounts WHERE username=?';
    const existingUser = await sqlQuery(findIfUserExistsQuery, username);
    if (existingUser.length)
      return res.status(402).send({ message: 'Username already taken' });
    const registerQuery =
      'INSERT INTO accounts (username,password) VALUES(?,?)';
    const hashedPassword = bcryptjs.hashSync(password);
    await sqlQuery(registerQuery, username, hashedPassword);
    res.status(200).send({ message: 'Registered Successfully!' });
  } catch (err) {
    console.log(err);
  }
});

export default registerRoute;
