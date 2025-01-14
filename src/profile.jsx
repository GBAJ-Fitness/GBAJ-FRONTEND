import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div style={{color:"white", display:"flex"}}>
      <img src={user.picture} alt={user.name} />

      <div>
        <h2 style={{color:"black", fontSize:"20px"}} >{user.name}</h2>
        <p  style={{color:"black", fontSize:"15px"}}>{user.email}</p>
      </div>
      </div>
    )
  );
};

export default Profile;