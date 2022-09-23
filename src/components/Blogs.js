import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import Loading from "./Loading";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(3);
  const [isLoaded, setIsLoaded] = useState(false)

  const loadMore = () => {
    setVisible((item) => item + 3);
  };

  useEffect(() => {
    const getBlog = async () => {
      try {
        const results = await axiosInstance.get(`?&offset=${visible}`);
        setPosts(results.data.results);
        setIsLoaded(true)
        console.log(results);
      } catch {
        console.log("Error getting blogs");
        setIsLoaded(true)
      }
    };
    getBlog();
  }, [visible]);

  return (
    <>
      <div className="blogs">
        <h1>Blogs</h1>
        {isLoaded ? posts.map((post) => {
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
        }): <Loading />}
        <div className="blog-loadmore">
          <button className="loadmore" onClick={() => loadMore()} disabled={isLoaded}>
            {isLoaded ? <span>Loading...</span> : "Loadmore"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Blogs;
