import React from "react";
import "./styles.css";
import logo from "../../Assets/logo.ico";
import aboutUs from "../../Assets/aboutUs.png";
import plus from "../../Assets/plus.png";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import AboutUs from "./AboutUs";
import { Link } from "react-router-dom";


function Sidebar() {
  
  // const temp=()=>{
  //   const navigate=useNavigate();

  //   const navigateToAboutUs=()=>{
  //     navigate('/AboutUs');
  //   };
  // };
  
  const navigate=useNavigate();
  const handleClick = async () => {
    
    window.location.reload(false);
    try {
      console.log("new chat created");
      await axios.post("http://localhost:3000/api/messages/new_chat");
    } catch (error) {
      console.error("Error creating new chat:", error);
    }
  };


  

  return (
    <div className="Sidebar">
      <div className="upperside">
        <div className="uppersideTop">
          <img src={logo} alt="FosterAI logo" className="logo" />
          <img className="logoText" src="../Assets/FosterAi_logo.png" />
        </div>
        <button className="midbtn" onClick={handleClick}>
          <img src={plus} alt="New chat" className="addbtn" />
          New Chat
        </button>
      </div>
      <div className="lowerside">
        <div className="listItems">
        <button className="aboutus">
          <img src={aboutUs} alt="About Us" className="aboutusImage" />
          <Link to="/aboutus">About Us</Link>
        </button>  
        <button className="logout" onClick={async()=>{
          navigate('/');
        }}>Log out</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
