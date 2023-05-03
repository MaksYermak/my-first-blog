
// Browse all posts or users:
export const GET_ALL_POSTS = () => `/api/posts`;
export const GET_ALL_USERS = () => `/api/users`;

// Browse all posts under a user
export const GET_ALL_POSTS_BY_USER = (userId) => `/api/users/${userId}/posts`;

// Browse a single post or user
export const GET_USER = (userId) => `/api/users/${userId}`;
export const GET_POST = (postId) => `/api/posts/${postId}`;

// Browse single post under a user
export const GET_POST_BY_USER = (userId, postId) => `/api/users/${userId}/posts/${postId}`;

// Create a user or post
export const CREATE_USER = () => `/api/users`;
export const CREATE_POST = () => `/api/posts`;

// Update a user or post
export const UPDATE_USER = (userId) => `/api/users/${userId}`;
export const UPDATE_POST = (postId) => `/api/posts/${postId}`;

// Remove a user or post
export const DELETE_USER = (userId) => `/api/users/${userId}`;
export const DELETE_POST = (postId) => `/api/posts/${postId}`;
