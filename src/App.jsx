import React, { useState } from 'react';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

  const addBlog = (newBlog) => {
    if (editingBlog) {
      const updatedBlogs = blogs.map((blog) => 
        blog.id === editingBlog.id ? { ...newBlog, id: editingBlog.id } : blog
      );
      setBlogs(updatedBlogs);
      setEditingBlog(null);
    } else {
      setBlogs([...blogs, { ...newBlog, id: Date.now() }]);
    }
  };

  const editBlog = (id) => {
    const blogToEdit = blogs.find((blog) => blog.id === id);
    setEditingBlog(blogToEdit);
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="App">
      <h1>Simple Blog Platform</h1>
      <BlogForm addBlog={addBlog} editingBlog={editingBlog} />
      <BlogList blogs={blogs} editBlog={editBlog} deleteBlog={deleteBlog} />
    </div>
  );
};

export default App;
