// import React from 'react'
// import {Link} from 'react-router-dom'
// import '../App.css'
import styled from 'styled-components'
// <<<<<<< khwanchai-phaipha
// =======
// import Login from '../components/login/Login.js';
// import Dashboard from './Dashboard';
// >>>>>>> master


export const NavWrap = styled.div`
    display:flex;
    flex-direction: end;
    // flex-wrap: wrap;
    // width: 100%;
    margin-left: 65%;
    margin-bottom: 6%;
    height: 3%;
    padding-top: .7%;
    letter-spacing: 0.075em;
    right: 1.5em;
    text-transform: uppercase;
    top: 0.75em;
    justify-content: space-evenly;
    font-family: Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif;
`
// export const NavLinkStyle = styled.a`
// text-decoration: none;

// `
export const Button = styled.button`
    border: 1px solid rgb(172, 189, 178);
    color: white;
    text-decoration: none;
    background: rgb(68, 104, 82);
    width: 25%;
    height: 2rem;


`

// function Nav() {
//     return(
//         <div>
//         <NavWrap className="form-wrap">
//             <NavLink  id ="home" href="https://expactmarketing.netlify.app/#main">Home</NavLink>
//             <Link  id ="login" exact to ='/login'>Login</Link>
//             <Link to='/signup'>signup</Link>
//         </NavWrap>

<!-- function Nav() {

    return(
        <div>
        <NavWrap className="form-wrap">
            <NavLink id ="home" href="https://expatmarketing.netlify.app/index.html">Home</NavLink>
            <Link id='home' exact to='/dashboard'>Main Page</Link>
            <Link id ="login" exact to ='/'>Login</Link>
            <Link className='login' exact to='/signup'>Register</Link>
            <Link className="login" exact to='/posts'>Add Post</Link>
        </NavWrap>

 -->
//         </div>
//     )
// }

// export default Nav;