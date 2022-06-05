import express from 'express';
import { sqlQuery } from '../dbconfig.js';

const forumRoute = express.Router();

forumRoute.get('/all', async (req, res) => {
  try {
    const getPostsQuery = 'SELECT * FROM posts';
    const posts = await sqlQuery(getPostsQuery);

    res.send(posts);
  } catch (error) {
    console.log(error);
  }
});

export default forumRoute;
