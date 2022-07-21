import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Blogs from "./components/Blogs";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/create" element={<Post />}/>
      </Routes>
    </div>
  );
}

export default App;
