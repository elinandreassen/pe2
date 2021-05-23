import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Nav from "react-bootstrap/Navbar";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  const [auth, setAuth] = useContext(AuthContext);

  const history = useHistory();

  function logout() {
    setAuth(null);
    history.push("/");
  }

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">
        <p>HOLIDAZE</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/places">Hotels</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          {auth ? (
            <>
              <NavLink to="/adminPage">Admin</NavLink>{" "}
              <button className="btn btn_logout" onClick={logout}>
                Log out
              </button>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
