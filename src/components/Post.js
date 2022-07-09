import { useState } from "react";
import axiosInstance from "../api/axios";
import img1 from "../images/img1.jpg";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [blog, setBlog] = useState({ title: "", content: "", author: "" });
  let navigate = useNavigate();

  const getBlogDetails = (e) => {
    e.preventDefault();
    setBlog((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const result = await axiosInstance.post({setBlog});
      if (result?.status === 200) {
        return true;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="post-conatiner" onSubmit={handleSubmit}>
      <div className="post-image-container">
        <h3 className="post-header-text">Blog Here...</h3>
        <img className="post-image" src={img1} />

        <div className="form-control">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            className="post-title"
            value={setBlog.title}
            onChange={getBlogDetails}
            placeholder="title"
            required
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="content">content</label>
          <textarea
            className="post-image-description"
            cols="30"
            row="3"
            id="content"
            name="content"
            value={setBlog.content}
            onChange={getBlogDetails}
            placeholder="content"
          ></textarea>
        </div>
        <div className="form-control">
          <label htmlFor="author">Author</label>
          <input
            className="post-author"
            type="text"
            id="author"
            name="name"
            value={setBlog.author}
            placeholder="name"
            onChange={getBlogDetails}
            required
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="image"> Select image:</label>
          <input type="file" accept="image/*" className="post-file"></input>
        </div>
        <input type="submit" className="post-btn"></input>
      </div>
    </form>
  );
};

export default Post;
