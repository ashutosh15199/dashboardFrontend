import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
const Login = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigation = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigation('/')
        }
    },[])
    const handleData=async()=>{
        try{
            console.log(email,password);
            let result = await fetch('http://localhost:4000/login',{
                method:'Post',
                body:JSON.stringify({email,password}),
                header:{
                    'Content-Type':'application/json'
                }
            });
            result = await result.json();
            console.log(result);
            if(result.name){
            localStorage.setItem('user',JSON.stringify(result));
             navigation('/')
            }else{
                alert('please enter the connected details');
            }
        }catch(e){
            console.log(e.message)
        }
        
        
    }
  return (
    <div className="login">
          <input className='inputBox' type="text" value={email} onChange={(e)=>setEmail(e.target.value)}   placeholder="Enter Email"/>
            <input className='inputBox' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
            <button className="btn" onClick={()=>handleData()} >Login</button>
    </div>
  )
}

export default Login