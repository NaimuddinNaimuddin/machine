import React from "react"
// import { Link } from "react-router-dom"
const Navbar = (props) => {
    return (
        <div>
            <ul style = {{ display : "flex"  , padding : "10px" ,backgroundColor : "black" , marginTop : "0px"}}>
                <li style = {{ padding : "5px" , color : "white"}}>Layout1</li>
                <li style = {{ padding : "5px" , color : "white"}}>About</li>
                <li style = {{ padding : "5px" , color : "white"}}>Services</li>
                <li style = {{ padding : "5px" , color : "white"}}>Contact</li>
            </ul>
        </div>
    )
}      

export default Navbar 