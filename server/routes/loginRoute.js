import bcryptjs from 'bcryptjs';
import express from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { sqlQuery } from '../dbconfig.js';
import dotenv from 'dotenv';

dotenv.config();

const loginRoute = express.Router();

loginRoute.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(401)
      .send({ message: 'Please fill all the required fields' });
  try {
    const loginQuery = 'SELECT * FROM accounts WHERE username=?';
    const user = await sqlQuery(loginQuery, username);
    if (user.length) {
      const checkPasswordValidation = bcryptjs.compareSync(
        password,
        user[0].password
      );
      if (checkPasswordValidation) {
        delete user[0].password;
        const token = jsonwebtoken.sign({ user }, process.env.SECRET_CODE);
        return res.status(200).send({ user, token });
      }
    }

    res.status(401).send({ message: 'Wrong username or password' });
  } catch (error) {
    console.log(error);
    res.status(401).send(error);
  }
});

export default loginRoute;
