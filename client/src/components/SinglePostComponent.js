import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SinglePostComponent = ({ post }) => {
  return (
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
        Posted at {post.date_posted.slice(0, 19).replace('T', ' ')}
      </Card.Footer>
    </Card>
  );
};

export default SinglePostComponent;
