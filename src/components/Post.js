import { useState } from "react";
import axiosInstance from "../api/axios";
import img1 from "../images/img1.jpg";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [blog, setBlog] = useState({ title: "", content: "" });
  const [postErr, setPostErr] = useState("");

  const handleBlogDetails = (e) => {
    e.preventDefault();
    setBlog((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("user-data")); // to get the token saved in the local storage
    if (userData) {
      try {
        const result = await axiosInstance.post("/", blog, {
          headers: {
            Authorization: `Bearer ${userData.access}`,
          },
        });
        console.log(result);
        setBlog();
        navigate("/blogs");
      } catch (e) {
        setPostErr("Error with posting");
      }
    } else {
      setPostErr("Please login to post");
    }
  };

  return (
    <>
      <form className="post-conatiner" onSubmit={handleSubmit}>
        <div className="post-image-container">
          <h1 className="post-header-text">Tell us</h1>
          <div className="post-error-container">
            <div className="post-error">{postErr}</div>
          </div>
          <div className="post-image-contain">
            <img alt="" className="post-image" src={img1} />
          </div>
          <div className="form-control">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              className="post-title"
              value={blog.title}
              onChange={handleBlogDetails}
              placeholder="title"
              required
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="content">content</label>
            <textarea
              className="post-image-description"
              cols="30"
              row="4"
              id="content"
              name="content"
              value={blog.content}
              onChange={handleBlogDetails}
              placeholder="content"
            ></textarea>
          </div>
          <div className="form-control">
            <label htmlFor="image"> Select image:</label>
            <input type="file" accept="image/*" className="post-file"></input>
          </div>
          <button className="post-btn" onClick={() => handleSubmit}>
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Post;
