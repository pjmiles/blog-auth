import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(3);

  const loadMore = () => {
    setVisible((item) => item + 3);
  };

  useEffect(() => {
    const getBlog = async () => {
      try {
        const results = await axiosInstance.get(`?&offset=${visible}`);
        setPosts(results.data.results);
        console.log(results);
      } catch {
        console.log("Error getting blogs");
      }
    };
    getBlog();
  }, [visible]);

  return (
    <>
      <div className="blogs">
        <h1>Blogs...</h1>
        {posts.map((post) => {
          return (
            <div className="blog-container" key={post?.id}>
              <div className="blog-content-conatiner">
                <p className="blog-title">Title: {post.title}</p>
                <p className="blog-content">
                  Content <br /> {post.content}
                </p>
                <div className="author-container">
                  <div className="blog-author">{post.author}</div>
                </div>
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
