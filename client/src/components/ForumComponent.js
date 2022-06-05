import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const ForumComponent = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(
        'http://localhost:5000/api/forum-route/all'
      );
      setPosts(data);
      console.log(posts);
    };
    getPosts();
  }, []);
  return (
    <div className="forum-container">
      <h2 className="text-center">Forum</h2>
      {posts.map((post) => (
        <Card key={post.post_id} className="text-center mb-4">
          <Card.Header>{post.post_title}</Card.Header>

          <Card.Body>
            <Card.Title>
              {post.post_title} posted by {post.posted_by}
            </Card.Title>
            <Card.Text>{post.post}</Card.Text>
            <Button variant="primary">View Full Post</Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            Posted at {post.date_posted}
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export default ForumComponent;
