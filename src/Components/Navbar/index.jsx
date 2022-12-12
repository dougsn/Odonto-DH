import { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { NavBarContext } from "../contexts/NavBarContext";


const Navbar = () => {

  const {contextIsLight, setContextIsLight} = useContext(NavBarContext);
  const [isLogado, setIsLogado] = useState(true);

  const navigate = useNavigate();
  
  function handleMode() {
    setContextIsLight(!contextIsLight);
  };

  function logout(){
    localStorage.clear();
    navigate("/");
  }

  return (
    <header className="sticky-top">
      <nav
        className={ contextIsLight ? `navbar navbar-expand-sm navbar-light bg-light` : `navbar navbar-expand-sm navbar-dark bg-dark`}
        aria-label="Third navbar example"
      >
        <div className="container">
          <Link to="/home" className={`navbar-brand ${styles.navbarBrand}`}>DH Odonto</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link to="/home" className={`nav-link`}>Home</Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                {/* Se o usuário estiver logado, deverá aparecer um botão de logout
                que vai apagar o token do localstorage.
                Se o usuário estiver deslogado, um link fará um redirecionamento, com react-router,
                ao formulário de login
                O botão de logout deverá ser testado darkmode
                se sim, btn-dark, se não, btn-light 
                */}
                {isLogado ? <button onClick={logout} className={contextIsLight ? `btn btn-light ${styles.btnLogout}` : `btn btn-dark ${styles.btnLogout}`}>
                  Logout 
                </button> : <Link to="/" className={`nav-link`}>Login</Link>}
              </li>
              <li className={`nav-item`}>
                <button onClick={handleMode}
                  className={contextIsLight ? `btn btn-dark ${styles.btnStyle}` : `btn btn-light ${styles.btnStyle}`}
                >
                  {contextIsLight ? `🌙` : `☀` }
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
