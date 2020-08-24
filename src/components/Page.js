import React, { useState } from "react"

import Project from "./Project"

const Page = (props) => {

    const projects = [
        { id: "1", title: "nodejs", description: "This is the first project.  " },
        { id: "2", title: "reactjs", description: "This is the first project." },
        { id: "3", title: "vuejs", description: "This is the first project." },
        { id: "4", title: "javascript", description: "This is the first project." },
        { id: "5", title: "jquery", description: "This is the first project." },
        { id: "6", title: "html", description: "This is the first project." },
        { id: "7", title: "css", description: "This is the first project." },
        { id: "8", title: "expressjs", description: "This is the first project." },
        { id: "9", title: "angularjs", description: "This is the first project." }
    ]

    const [projectList, projectListUpdate] = useState(projects)

    const filterHandler = (event) => {
        projectListUpdate(projects.filter(project => {
            if (project.title.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1) {
                return true
            }
        }))
    }

    const deleteHandler = (id) => {
        projectListUpdate(projectList.filter(project => {
            if (project.id !== id) {
                return true
            }
        }))
    }

    return (
        <div style={{ marginLeft: "5%", marginRight: "5%" }}>
            <div className="row">
                <div className="col s12 m12 l9">
                    <span style={{ fontSize: "28px" }}> Page Heading</span><span> Secondary Text</span>
                </div>
                <div className="col s12 m9 l3">
                    <input type="text" placeholder="search" onChange={filterHandler} />
                </div>
            </div>


            <div className="row" >

                {projectList.map(project => {
                    return <Project key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        deleteHandler={deleteHandler} />
                })}
            </div>
        </div>
    )
}

export default Page