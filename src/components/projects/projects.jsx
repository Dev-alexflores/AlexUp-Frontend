import { GetProjects } from "./projectsAPI";
import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import './projects.css'

const Projects = () => {
    const [resumes, setResumes] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const response = await GetProjects();
            setResumes(response);
        }
        fetchData();
    }, []);
    return (
        <div className="projects-cards">
            {resumes.map(item=>{
                return (
                    <div className="card" key={item.id}>
                        <div className="images">
                            <img className="card-image" src={item.logo} alt="logo" />
                        </div>
                        <div className="detail">
                            <h4>name : {item.contact.name}</h4>
                            <p>description: {item.description}</p>
                            <p>more details: {item.textInvitation}</p>
                            <Button variant="contained" color="success">Contained</Button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Projects;