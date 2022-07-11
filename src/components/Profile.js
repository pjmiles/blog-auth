import pic from "../images/img1.jpg";
import Navbar from "./Navbar";
const Profile = () => {
  return (
    <>
    <Navbar />
    <div className="profile">
      <div className="profile-image-container">
        <div className="profile-image">
          <img src={pic} alt="profile" className="profile-inner-image" />
        </div>
        <div className="profile-right">
          <h2>Ponmile James</h2>
          <div className="profile-right-text">
            <h5>20 Post</h5>
            <h5>50 Followers</h5>
            <h5>120 Followering</h5>
          </div>
          <button className="profile-right-btn">Edit profile</button>
        </div>
      </div>
      <div className="profile-gallery">
        <img
          className="profile-item"
          alt="bike"
          src="https://images.unsplash.com/photo-1653672411134-ff888d9ef30b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZSUyMHJpZGVyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />

        <img
          className="profile-item"
          alt="bike"
          src="https://images.unsplash.com/photo-1653672411134-ff888d9ef30b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZSUyMHJpZGVyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />

        <img
          className="profile-item"
          alt="bike"
          src="https://images.unsplash.com/photo-1653672411134-ff888d9ef30b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZSUyMHJpZGVyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />

        <img
          className="profile-item"
          alt="bike"
          src="https://images.unsplash.com/photo-1653672411134-ff888d9ef30b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZSUyMHJpZGVyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />

        <img
          className="profile-item"
          alt="bike"
          src="https://images.unsplash.com/photo-1653672411134-ff888d9ef30b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZSUyMHJpZGVyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />

        <img
          className="profile-item"
          alt="bike"
          src="https://images.unsplash.com/photo-1653672411134-ff888d9ef30b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZSUyMHJpZGVyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </div>
    </>
  );
};

export default Profile;
