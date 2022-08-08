import { Link } from "react-router-dom";
import Login from "../components/Login";
import Blogs from "../components/Blogs";

const Home = () => {
  return (
    <div className="home-section">
      <header className="home-header">
        <h2>Welcome to PJMILES</h2>
        <h1>
          <span>"</span> Blog <span>"</span>
        </h1>
        <p>
          a place to express yourself, gain insight <br /> and feel entertained
          through daily updates...
        </p>
        <div>
        <Link to="/login" element={<Login />}>Login</Link>
      </div>
      </header>
      <Blogs />
    </div>
  );
};

export default Home;
