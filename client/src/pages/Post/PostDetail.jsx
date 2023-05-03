import React from 'react';
import { Link } from "react-router-dom"

const PostDetail = () => {
  const post = {
    "id": 1,
    "title": "blabla",
    "text": "looong text should be here",
    "created_date": "2022-06-15T22:40:22.877778+03:00",
    "published_date": "2022-06-15T22:40:34.283911+03:00",
    "author": 1
  }

  return (
    <div className="post">
      {
        post.published_date
          ? <div className="date">{post.published_date}</div>
          : <Link className="btn btn-default" to={`/post/${post.id}/publish`}>Publish</Link>
      }
      <Link className="btn btn-default" to={`/post/${post.id}/edit`}><span className="glyphicon glyphicon-pencil"></span></Link>
      <Link className="btn btn-default" to={`/post/${post.id}/remove`}><span className="glyphicon glyphicon-remove"></span></Link>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
    </div>
  );
}

export default PostDetail
