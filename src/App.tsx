import React,{useState} from 'react';

import './App.css';

function App() {
  
  

var visible = 0;
const el = document.getElementById('inputs');
const btn = document.getElementById('eye');

const  handleClick2=()=>{

  if (el != null && btn != null) {
    btn.addEventListener('click', function handleClick() {
      if (el.style.display === 'none') {
        // ✅ Shows element if hidden
        el.style.display = 'block';
  
        btn.textContent = 'Hide element';
      } else {
        // ✅ Hides element if shown
        el.style.display = 'none';
  
        btn.textContent = 'Show element';
      }
     
      
    });
  }
}


  return (
    <div className="Login">
     <div className='Loginbox'>
      <div className='Loginheader'>Login </div>
        <div className='inputs'>
        <input className='email' placeholder='Enter your email'/>
        {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/> */}
      
          <input
        
        className='password' placeholder='Enter your password'
        type={"password"} onClick={handleClick2}
        
        />
        

        {/* <i className="fa fa-eye" id="eye"  onClick={handleClick2}  ></i>  */}
      
        
       
         
      </div>
      <div style={{textAlign:"center",color:"red"}}>

        <button  className='submitbutton' >Login</button>
        <p>Need an account? <br/>
        <span className='line'>
          {/*put rauter link here*/}
          <a href='#'>Sign up</a>
        </span>
        </p>
       
      </div>
     </div>
    </div>
  );
}

export default App;
function showPass(arg0: () => void) {
  throw new Error('Function not implemented.');
}

