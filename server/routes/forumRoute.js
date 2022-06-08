import express from 'express';
import { sqlQuery } from '../dbconfig.js';

const forumRoute = express.Router();

forumRoute.get('/all', async (req, res) => {
  try {
    const getPostsQuery = `SELECT posts.post_id, posts.post_title, posts.post, posts.account_id, posts.date_posted, accounts.username as posted_by
     FROM posts
     INNER JOIN accounts
     ON  accounts.account_id=posts.account_id`;
    const posts = await sqlQuery(getPostsQuery);
    res.send(posts);
  } catch (error) {
    console.log(error);
  }
});

export default forumRoute;
