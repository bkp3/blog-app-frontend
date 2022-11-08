import React from 'react'
import { useContext } from 'react';
import Base from "../../components/Base";
import userContext from "../../context/userContext";

function ProfileInfo() {
  const user = useContext(userContext);
  return (
    <Base>
      <div>
        <h1>This is Profile Info</h1>
        <h1>Welcome user : {user.name}</h1>
      </div>
    </Base>
  )
}

export default ProfileInfo