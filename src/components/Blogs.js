import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(3);

  const getBlog = async () => {
    try {
      const results = await axiosInstance.get();
      setPosts(results.data.results);
    } catch {
      console.log("Error getting blogs");
    }
  };

  const loadMore = () => {
    setVisible((moreItem) => moreItem + 3);
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <>
      <div className="blogs">
        <h1>Blogs...</h1>
        {posts.slice(0, visible).map((post) => {
          return (
            <div className="blog-container" key={post?.id}>
              <p className="blog-title">Title: {post.title}</p>

              <div className="blog-content-conatiner">
                <p className="blog-content">Content: {post.content}</p>
              </div>
            </div>
          );
        })}
        <div className="blog-loadmore">
          <button className="loadmore" onClick={() => loadMore()}>
            load more
          </button>
        </div>
      </div>
    </>
  );
};

export default Blogs;
