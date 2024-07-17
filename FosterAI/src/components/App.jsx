import React from "react";
import "./styles.css";
import ChatBox from "./Chatbox";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Sidebar />
        <ChatBox />
      </div>
    </>
  );
}

export default App;