import { Link } from "react-router-dom";
// import Login from "../components/Login";
import Blogs from "../components/Blogs";

const Home = () => {
  return (
    <div className="home-section">
      <header className="home-header">
        <h1>Welcome to PJmiles</h1>
        <h2>
          <span>"</span> Blog <span>"</span>
        </h2>
        <p>
          a place to express yourself, gain insight <br /> and feel entertained
          through daily updates...
        </p>
        <div className="header-base">
          <span>
            click{" "}
            <Link to="/blogs" element={<Blogs />}>
              here
            </Link>
          </span>
        </div>
      </header>
    </div>
  );
};

export default Home;
