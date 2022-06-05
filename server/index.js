import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connection, { sqlQuery } from './dbconfig.js';
import loginRoute from './routes/loginRoute.js';
import registerRoute from './routes/registerRoute.js';
import forumRoute from './routes/forumRoute.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/login-route', loginRoute);
app.use('/api/register-route', registerRoute);
app.use('/api/forum-route', forumRoute);

app.listen(PORT, console.log(`Running on port ${PORT}`));
// app.get('/', async (req, res) => {
//   const adminAccount = {
//     id: uuidv4(),
//     username: 'crazierlatticee',
//     password: '1331',
//     role: 1,
//   };
//   try {
//     const results = await sqlQuery('INSERT INTO ACCOUNTS SET ?', adminAccount);
//     const createdAccount = await sqlQuery(
//       'SELECT username,role,password,id FROM accounts WHERE username=?',
//       adminAccount.username
//     );
//     res.status(200).send(createdAccount);
//   } catch (error) {
//     console.log('here');
//     res.status(402).json({ error });
//   }
// });
