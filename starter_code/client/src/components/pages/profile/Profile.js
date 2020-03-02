import React from "react";

const Profile = props => (
  <h1>Soy el perfil  {props.loggedInUser.username}</h1>
);

export default Profile;
