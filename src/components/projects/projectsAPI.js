import axios from "axios";

const API_NAME = "https://fa-cdapi-projects-dev-bra.azurewebsites.net";
// 
const API_VERSION = "v1";
const API_PROJECTS = "projects";

export async function GetProjects() {
    try {
        const { data } = await axios.get(`${API_NAME}/api/${API_VERSION}/${API_PROJECTS}`);
        return data;
    }catch(error){
        console.log("Error");
    }
};
