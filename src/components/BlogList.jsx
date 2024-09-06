import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ blogs, editBlog, deleteBlog }) => {
  return (
    <div className="blog-list">
      {blogs.length === 0 ? (
        <h3>No blogs yet. Create one!🤗</h3>
      ) : (
        blogs.map((blog) => (
          <BlogPost 
            key={blog.id} 
            blog={blog} 
            editBlog={editBlog} 
            deleteBlog={deleteBlog} 
          />
        ))
      )}
    </div>
  );
};

export default BlogList;
