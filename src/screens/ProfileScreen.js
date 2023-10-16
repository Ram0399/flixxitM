import React from "react";
import { useSelector } from "react-redux"; // Import useSelector from Redux
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase"; // Import Firebase auth

import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);

  const handleSignOut = () => {
    auth.signOut(); // Sign the user out using Firebase auth
  };

  return (
    <div className="profileScreen">
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="User profile"
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              <div className="profileScreen_plans">
                <h4>Netflix Standard</h4>
                <button
                  onClick={() => alert("Plan Change Feature Coming Soon...")}
                  className="profileScreen_subscribe"
                >
                  Subscribe
                </button>
              </div>
              <div className="profileScreen_plans">
                <h4>Netflix Basic</h4>
                <button
                  onClick={() => alert("Plan Change Feature Coming Soon...")}
                  className="profileScreen_subscribe"
                >
                  Subscribe
                </button>
              </div>
              <div className="profileScreen_plans">
                <h4>Netflix Premium</h4>
                <button
                  onClick={() => alert("Plan Change Feature Coming Soon...")}
                  className="profileScreen_subscribe"
                >
                  Subscribe
                </button>
              </div>
              <button onClick={handleSignOut} className="profileScreen_signout">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
