import React from "react"

const Project = (props) => {

    return (        
        <div className="col s12 m6 l4">
            <div style={{ width: "100%", height: "150px", backgroundColor: "#eee" }}>
                <img src="" />
            </div>

            <p style={{ color: "blue", fontSize: "20px" }}> {props.title}</p>
            <p>{props.description}</p>
            <button id={props.id} onClick={() => { props.deleteHandler(props.id) }}
                style={{ marginBottom: "20px" }} className="btn-small red "> DELETE </button>
        </div>
    )
}

export default Project 