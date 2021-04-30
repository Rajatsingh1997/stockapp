import React from 'react'
import {Navbar} from "react-bootstrap"
import "./Navbr.css";
function Navbr() {
    return (
        <div className="topbar">
           <Navbar expand="lg" variant="#35496b" bg="#rgba(53,73,107,255)">
           <Navbar.Brand href="#"><span className="Quikie">Quikie</span></Navbar.Brand>
           </Navbar>
        </div>
    )
}

export default Navbr
