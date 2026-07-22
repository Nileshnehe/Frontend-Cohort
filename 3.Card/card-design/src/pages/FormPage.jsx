import React, { useState } from 'react';
// import './FormPage.css'; // Global ya specific styling sheet

const FormPage = ({ onCardSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    imgUrl: '',
    followers: '',
    posts: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation check basic inputs ke liye
    if (!formData.name || !formData.bio || !formData.imgUrl) {
      alert("Please fill name, bio and image url fields!");
      return;
    }

    const finalCardData = {
      id: Date.now(), // Unique identity tracking ke liye
      name: formData.name,
      bio: formData.bio,
      imgUrl: formData.imgUrl,
      followers: parseInt(formData.followers) || 0,
      posts: parseInt(formData.posts) || 0
    };

    onCardSubmit(finalCardData); // Parent state update wrapper callback
  };

  return (
    <div className="form-container-box">
      <h2>Design Creator Card</h2>
      <form onSubmit={handleSubmit} className="creation-form">
        
        <div className="input-group">
          <label>Creator Name</label>
          <input type="text" name="name" placeholder="e.g. Sophie Bennett" value={formData.name} onChange={handleChange} />
        </div>

        <div className="input-group">
          <label>Profile Image URL</label>
          <input type="url" name="imgUrl" placeholder="Paste unspash/web image live address link" value={formData.imgUrl} onChange={handleChange} />
        </div>

        <div className="input-group">
          <label>Short Bio</label>
          <textarea name="bio" rows="3" placeholder="Describe product core target lines..." value={formData.bio} onChange={handleChange}></textarea>
        </div>

        <div className="form-row-stats">
          <div className="input-group">
            <label>Followers</label>
            <input type="number" name="followers" placeholder="312" value={formData.followers} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Total Posts</label>
            <input type="number" name="posts" placeholder="48" value={formData.posts} onChange={handleChange} />
          </div>
        </div>

        <button type="submit" className="submit-form-btn">Generate Live Card</button>
      </form>
    </div>
  );
};

export default FormPage;
