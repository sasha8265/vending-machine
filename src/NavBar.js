import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/">Vending Machine</NavLink>
            <NavLink to="/dumplings">Dumplings</NavLink>
            <NavLink to="/noodles">Noodles</NavLink>
            <NavLink to="/cupcake">Cupcake </NavLink>
        </nav>
    )
}

export default NavBar;