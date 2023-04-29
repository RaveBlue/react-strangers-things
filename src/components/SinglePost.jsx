import React from 'react';
import { Link } from 'react-router-dom';
const SinglePost = () => {
  return (
    <div>
      <h1>Single Post Details</h1>

      <button>
        <Link to="/Posts">back to post list</Link>
      </button>
    </div>
  );
};

export default SinglePost;