import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';




function Login(){
 const [ShowSignup,setshowsignup]=useState(true);
    
 const[userId,setUserId]=useState("");
 const[password,setpassword]=useState("");
 const[userName,setUserName]=useState("");
 const[userEmail,setUserEmail]=useState("");
 const[userType,setUserType]=useState("CUSTOMER");
 const[message,setmessage]=useState("");
 
 const[error,setError]=useState(false);
 
 const togglesignup=()=>{
    clearstate();
        setshowsignup(!ShowSignup);
    }
    const clearstate=()=>{
        setUserEmail("");
        setUserId("");
        setUserName("");
        setpassword("");
        setError(false);
        setmessage("");
        
    }

    
    const onSignUp=(e)=>{
 
        const data ={
    name:userName,
    userId:userId,
    email:userEmail,
    usertype:userType,
    password:password
  };
  e.preventDefault();
 
  if(userId.length<5){
      setError(true);
      setmessage("user should be of 5 to 10 character");
      return;
  }
  else if(password.length<5 ||password.length>12 ){
    setError(true);
    setmessage("password should of 5 to 10 characters");
    return;
  };

    }

    const onLogin=()=>{

    }

 const updatesignupdata=(e)=>{
 
    
    const id=e.target.id;
    if(id==="userId"){
        setUserId(e.target.value)
    }
    else if(id==="userEmail"){
        setUserEmail(e.target.value)
    }
    else if(id==="password"){
        setpassword(e.target.value)
    }
    else{
        setUserName(e.target.value)
    }
 }  





    return <div className="bg-info d-flex justify-content-center align-items-center vh-100">
        <div style={{width:30 +"rem"}} className="card p-3 rounded-4 shadow-lg">
            <h4 className="text-info">{ShowSignup? "Sign Up": "Log In"}</h4>

            <form onSubmit={ShowSignup ? onSignUp : onLogin}>
                <div className="input-group">
                    <input className="form-control m-1"  type="text" value={userId} id="userId" onChange={updatesignupdata} placeholder="userId"/>
                </div>
                {
                    ShowSignup&&
                    <>

                <div className="input-group">
                    <input className="form-control m-1"  type="text" value={userName} id="userName" onChange={updatesignupdata} placeholder="username"/>
                </div>

                <div className="input-group">
                    <input className="form-control m-1"  type="Email" value={userEmail}  id="userEmail" onChange={updatesignupdata} placeholder="Email"/>
                </div>
                </>
                }
 
              
                

                <div className="input-group">
                    <input className="form-control m-1" type="password" value={password} id="password" onChange={updatesignupdata} placeholder="password"/>
                </div>


                {
                    ShowSignup&&
                    <>
 <DropdownButton id="userType" title={userType} varient="Light" align="end">
      <Dropdown.Item eventkey="CUSTOMER">CUSTOMER</Dropdown.Item>
      <Dropdown.Item eventkey="ENGINEER">ENGINEER</Dropdown.Item>
      
    </DropdownButton>
    </>
}

                <div className="input-group">
                    <input  className="btn btn-info form-control text-white m-1 cursor-pointer" type="submit" value={ShowSignup? "Sign Up": "Log In"}/>
                </div>

                <div className="text-info" onClick={togglesignup}>
                    {ShowSignup? "Already have an account? Login":" Dont't have an account? Sign Up"}
                   
                </div>
                <div className={error ?"text-danger":"text-success"}>{message}</div>
            </form>
        </div>
    </div>
}

export default Login;