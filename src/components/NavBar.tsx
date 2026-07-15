import { Link } from "react-router";

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/components">Components</Link>
            <Link to="/conditional">Conditional Rendering</Link>
            <Link to="/external">External Data</Link>
            <Link to="/events">Event Handling</Link>
            <Link to="/state">State</Link>
            <Link to="/lifting">Lifting State</Link>
        </nav>
    );
}

export default NavBar;