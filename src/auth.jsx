import React from 'react'
import LoginButton from "./login";
import LogoutButton from "./logout";
import Profile from "./profile";
import { useAuth0 } from '@auth0/auth0-react';


export default function auth() {
    const { isAuthenticated, isLoading } = useAuth0();

  return (
    <div style={{display:"flex",justifyContent:"space-between", alignItems:"flex-end", paddingTop:"10px"}}>
     <Profile/>
        <div style={{width:"100%", height:"40px",display:"flex", justifyContent:"flex-end"}}>

        {  !isAuthenticated && <LoginButton/> }
  {isAuthenticated &&  <LogoutButton/>}
        </div>
     </div>
  )
}
