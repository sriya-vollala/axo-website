import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand bg-body-tertiary body">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">About</NavLink>
                    <div className="justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/presidents-note">President's Note</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/philanthropy">Philanthropy</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/exec-board">Executive Board</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
    )
    
}
export default NavBar;

