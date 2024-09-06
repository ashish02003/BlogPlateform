import React, { useState, useEffect } from 'react';

const BlogForm = ({ addBlog, editingBlog }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setContent(editingBlog.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingBlog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">{editingBlog ? 'Update Blog' : 'Add Blog'}</button>
    </form>
  );
};

export default BlogForm;
