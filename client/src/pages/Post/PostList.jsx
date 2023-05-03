import React from 'react';
import { Link } from "react-router-dom"

const PostList = () => {
  const posts = [
    {
      "id": 1,
      "title": "blabla",
      "text": "looong text should be here",
      "created_date": "2022-06-15T22:40:22.877778+03:00",
      "published_date": "2022-06-15T22:40:34.283911+03:00",
      "author": 1
    }
  ];

  return (
    <>
      {posts.map((post, index) => {
        return (
          <div className="post">
            <div className="date">{post.published_date}</div>
            <h1><Link to={`/post/${post.id}`}>{post.title}</Link></h1>
            <p>{post.text}</p>
          </div>
        )
      })}
    </>
  );
}


export default PostList
