import { useState } from "react";
import axiosInstance from "../api/axios";
import img1 from "../images/img1.jpg";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Post = () => {
  const [blog, setBlog] = useState({ title: "", content: "", author: "" });
  const [postErr, setPostErr] = useState("")
  // const [isAuth, setIsAuth] = useState("") //state to check if user have access to post


  
  const handleBlogDetails = (e) => {
    e.preventDefault();
    setBlog((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // setIsAuth("You are not allowed to post until you are logged in")
  };

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axiosInstance.get(blog, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer  `
      }
    });
      localStorage.getItem("user-data") // to get the token saved in the local storage
      console.log(result)
      setBlog();
      navigate("/blogs");
    } catch (e) {
      console.log(e);
      setPostErr("There was a problem sending post")
    }
  };

  return (
    <>
      <form className="post-conatiner" onSubmit={handleSubmit}>
        <div className="post-image-container">
          <h3 className="post-header-text">Blog Here...</h3>
          <div>{postErr}</div>
          <img alt="" className="post-image" src={img1} />
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
            <label htmlFor="author">Author</label>
            <input
              className="post-author"
              type="text"
              id="author"
              name="author"
              value={blog.author}
              placeholder="name"
              onChange={handleBlogDetails}
              required
            ></input>
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
