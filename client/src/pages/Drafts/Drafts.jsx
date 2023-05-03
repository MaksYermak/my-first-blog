import React from 'react';
import { Link } from "react-router-dom"

const Drafts = () => {
  const drafts = [
    {
      "id": 2,
      "title": "testsrests",
      "text": "it is test for rest",
      "created_date": "2022-07-04T22:25:02.499449+03:00",
      "published_date": null,
      "author": 1
    }
  ]

  return (
    <>
      {drafts.map((draft) => {
        return (
          <div className="post">
            <p className="date">created: {draft.created_date}</p>
            <h1><Link to={`/post/${draft.id}/`}>{draft.title}</Link></h1>
            <p>{draft.text}</p>
          </div>
        )
      })}
    </>
  )
}

export default Drafts
