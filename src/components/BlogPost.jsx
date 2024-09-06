import React from 'react';

const BlogPost = ({ blog, editBlog, deleteBlog }) => {
  return (
    <div className="blog-post">
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
      <button onClick={() => editBlog(blog.id)}>Edit</button>
      <button onClick={() => deleteBlog(blog.id)}>Delete</button>
    </div>
  );
};

export default BlogPost;
