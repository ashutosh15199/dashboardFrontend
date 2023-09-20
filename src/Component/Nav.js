import React from 'react';
import {Link,useNavigate} from "react-router-dom";
const Nav = ()=>{
    const navigation = useNavigate();
    const auth = localStorage.getItem('user');
    const logOut=()=>{
        localStorage.clear();
        navigation('/signup');
    }
    return(
        <div className="nav">
            {auth ?
            <ul className="nav-ul">
                <li><Link to="/">Product</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
              
                <li><Link onClick={logOut} to="/signup">LogOut</Link></li>

               

            </ul>
            :
            <ul className="nav-ul nav-right">
                <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/login">LogIn</Link></li>
            </ul>
}
        </div>
    )
}
export default Nav;