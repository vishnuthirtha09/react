import React from 'react'
import './CSS/Header.css'

const Header =()=> {
  function click(name){
    console.log(name);
  }
  

  return (
    <div>
      
        <p className='para'>siet</p>
     <button onClick={()=>click('vishnu')}>click me</button>
    </div>
  )
  }
  export default Header