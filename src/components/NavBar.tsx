import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { toggleTheme } from "../redux/theme";
import type { RootState } from "../redux/store";

function NavBar() {

    const theme = useSelector((state: RootState) => state.theme);
    const dispatch = useDispatch();
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/components">Components</Link>
            <Link to="/conditional">Conditional Rendering</Link>
            <Link to="/external">External Data</Link>
            <Link to="/events">Event Handling</Link>
            <Link to="/state">State</Link>
            <Link to="/lifting">Lifting State</Link>
            <button onClick={() => dispatch(toggleTheme())} className={theme}>{theme === "light" ? "Dark Mode" : "Light Mode"}</button>
        </nav>
    );
}

export default NavBar;