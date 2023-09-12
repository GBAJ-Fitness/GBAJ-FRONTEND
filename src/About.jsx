import React, { Component } from 'react'

  
export default class About extends Component {
  render() {
    
    return ( 
        <div
        style={{
         width: "100%",
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',

         
         
        }}

        
        >
        
            <img src="/About Us.PNG" alt="picture" width="1500" height="1200"/>
            <div>
            <img src="/Gerarad.png" alt="picture" width="400" height="500"/>
            <img src="/Brian.png" alt="picture" width="400" height="500"/>
            <img src="/Anya.png" alt="picture" width="400" height="500"/>
            <img src="/Justin.png" alt="picture" width="400" height="500"/>
            <div>About Us</div> 
            </div>
        </div>
   
      
    )
  }
}