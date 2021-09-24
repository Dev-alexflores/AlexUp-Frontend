import Navbar from './../NavBar/Navbar';
import { HashRouter as Router } from "react-router-dom";
import Projects from '../projects/projects';

const App = () => {
    return (
        <Router>
        <div>
            <Navbar/>
            <h1>Hi Cote</h1>
        </div>
        <div> 
            <Projects/>
        </div>
        </Router>
    );
}

export default App;