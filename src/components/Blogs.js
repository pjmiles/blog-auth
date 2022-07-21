import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  const getBlog = async () => {
    try {
      const results = await axiosInstance.get();
      setPosts(results.data.results);
      // console.log(results.data.getPosts)
      // console.log(results.data.results)
    } catch {
      console.log("Error getting blogs");
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  console.log(posts);
  return (
    <div className="blogs">
        <h3>Blogs...</h3>
      {posts.map((post) => {
        return (
          <div className="blog-container" key={post._id}>
            <p className="blog-title">Title: {post.title}</p>

            <div className="blog-content-conatiner">
              <p className="blog-content">Content: {post.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
