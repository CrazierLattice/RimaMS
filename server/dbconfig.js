import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD || '',
  database: 'RimaMS',
});

connection.connect((err) => {
  if (err) return console.log(err.stack);

  console.log('Connected to MySQL');
});

export const sqlQuery = (query, ...values) => {
  return new Promise((resolve, reject) => {
    connection.query(query, values, (err, results) => {
      if (err) return reject(err);

      resolve(results);
    });
  });
};

export default connection;
