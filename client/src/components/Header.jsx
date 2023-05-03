import * as React from "react"
import { useState } from "react";
import { Link } from "react-router-dom"

const Header = () => {
  const [token, setToken] = useState("test");

  // if (!token) {
  //   return <Login setToken={setToken} />
  // }
  let user = {
    username: 'test',
  };

  return (
    <div className="page-header">
      {token ?
        <>
          <Link to="/post/new/" className="top-menu"><span className="glyphicon glyphicon-plus"></span></Link>
          <Link to="/drafts" className="top-menu"><span className="glyphicon glyphicon-edit"></span></Link>
          <p className="top-menu">Hello {user.username} <small>(<Link to="/logout">Log out</Link>)</small></p>
        </> :
        <Link to="/login" className="top-menu"><span className="glyphicon glyphicon-lock"></span></Link>
      }
      <h1>
        <Link to="/">Travel Blog</Link>
      </h1>
    </div>
  );
};

export default Header;
