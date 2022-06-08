import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts } from '../reducers/forumReducer';
import SinglePostComponent from './SinglePostComponent';
import PaginationComponent from './PaginationComponent';

const ForumComponent = () => {
  const dispatch = useDispatch();
  let { posts } = useSelector((state) => state.forum);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(
        'http://localhost:5000/api/forum-route/all'
      );
      dispatch(setPosts(data));
    };
    getPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="forum-container">
      <h2 className="text-center">Forum</h2>
      {currentPosts?.map((post) => (
        <SinglePostComponent key={post.post_id} post={post} />
      ))}
      <PaginationComponent
        postsPerPage={postsPerPage}
        totalPosts={posts?.length}
        handlePagination={handlePagination}
      />
    </div>
  );
};

export default ForumComponent;
