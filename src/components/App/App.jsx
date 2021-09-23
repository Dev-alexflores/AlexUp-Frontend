import Navbar from './../NavBar/Navbar';
import { HashRouter as Router } from "react-router-dom";

const App = () => {
    return (
        <Router>
        <div>
            <Navbar/>
            <h1>Hey the application is alive !</h1>
            <h1>Welcome Martina Serranov !</h1>
            <h1>I'm gonna see you in a couple of mounths </h1>
            <h1>Tell you at your parent that they have a debt wit me</h1>
            <h1>Hi Cote</h1>
        </div>
        </Router>
    );
}

export default App;