import React from "react";
import "./style.css";
import style from "./styles.module.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import image from "./image/OIP.jpg";
// function Greetings(){
//     return <h1>Welcome,Good Morning</h1>
// }

const style1 = {
  backgroundColor: "lightgreen",
};

const Greetings = (props) => {
  console.log(props);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-black text-white">
        <div className="container-fluid ">
          <a className="navbar-brand col" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active color-light"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" color-light>
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
        
                  <li>
                    <a className="dropdown-item color-yellow-300" style={{
        color:  'white',
        transition: 'color 0.3s ease' // Optional: for smooth transition
      }} href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="/"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary
      </button>
      <button type="button" className="btn btn-success">
        Success
      </button>
      <button type="button" className="btn btn-danger">
        Danger
      </button>
      <button type="button" className="btn btn-warning">
        Warning
      </button>
      <button type="button" className="btn btn-info">
        Info
      </button>
      <button type="button" className="btn btn-light">
        Light
      </button>
      <button type="button" className="btn btn-dark">
        Dark
      </button>
      <button type="button" className="btn btn-link">
        Link
      </button>

      <h1 style={style1}>Welcome,Good Morning {props.name}</h1>
      <h2 className={style.heading}>This is your classNameroom</h2>
      <h2 id={style.heading1}>This is your classNameroom</h2>

      <img src={image} alt="bootsrap" height="600" width="600"></img>
    </div>
  );
};

export default Greetings;


//Event handling , states handling--->by class component and function component hooks use state use call