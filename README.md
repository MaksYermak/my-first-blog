# Travel-blog

Client Components:
- App
- Header
- Login
- Posts
- Drafts
- Posts/Post
- Posts/NewPost
- Posts/EditPost


API:

/posts
/posts/{id}

/users
/users/{id}

/users/{id}/posts
/users/{id}/posts/{id}


Resource Representations in JSON format:

/posts
{
    "posts": [
        {
            "id": 1234,
            "title": "Post Name",
            "content": "Longtext",
            "publishDate": "Date",
            "createDate": "Date",
            "publish": true | false,
            "authorId": 12345,
            "authorName": "Name",
        },
        {},
    ]
}
/posts/{id}
{
    "id": 1234,
    "title": "Post Name",
    "content": "Longtext",
    "publishDate": "Date",
    "createDate": "Date",
    "publish": true | false,
    "authorId": 12345,
    "authorName": "Name",
}

/users
{
    "users": [
        {
            "id": 1234,
            "name": "Name Surname",
            "login": "Blabla",
            "password": "token",
            "email": "admin@example.com",
            "posts": [
                {
                    "id": 1234,
                    "title": "Post Name",
                    "content": "Longtext",
                    "publishDate": "Date",
                    "createDate": "Date",
                    "publish": true | false,
                    "authorId": 12345,
                    "authorName": "Name",
                },
                {},
            ]
        },
        {},
    ]
}
/users/{id}
{
    "id": 1234,
    "name": "Name Surname",
    "login": "Blabla",
    "password": "token",
    "email": "admin@example.com",
    "posts": [
        {
            "id": 1234,
            "title": "Post Name",
            "content": "Longtext",
            "publishDate": "Date",
            "createDate": "Date",
            "publish": true | false,
            "authorId": 12345,
            "authorName": "Name",
        },
        {},
    ]
}

/users/{id}/posts
{
    "posts": [
        {
            "id": 1234,
            "title": "Post Name",
            "content": "Longtext",
            "publishDate": "Date",
            "createDate": "Date",
            "publish": true | false,
            "authorId": 12345,
            "authorName": "Name",
        },
        {},
    ]
}
/users/{id}/posts/{id}
{
    "id": 1234,
    "title": "Post Name",
    "content": "Longtext",
    "publishDate": "Date",
    "createDate": "Date",
    "publish": true | false,
    "authorId": 12345,
    "authorName": "Name",
}


HTTP Methods:

Browse all posts or users:
HTTP GET /posts
HTTP GET /users

Browse all posts under a user
HTTP GET /users/{id}/posts

Browse a single post or user
HTTP GET /users/{id}
HTTP GET /posts/{id}

Browse single post under a user
HTTP GET /users/{id}/posts/{id}

Create a user or post
HTTP POST /users
HTTP POST /posts

Update a user or post
HTTP PUT /users/{id}
HTTP PUT /posts/{id}

Remove a user or post
HTTP DELETE /users/{id}
HTTP DELETE /posts/{id}

