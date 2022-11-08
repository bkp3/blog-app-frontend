import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import us from 'react-router-dom'
import userContext from './userContext';

function UserProvider({ children }) {

  const [user, setUser] = useState({
    name: 'react'
  })

  useEffect(() => {
    setUser({
      name: "Bhola"
    })
  })


  return (
    <userContext.Provider value={user}>
      {children}
    </userContext.Provider>
  )
}

export default UserProvider;