import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import "./header.scss";

function Header() {


  return (
    <>
      <div className="main-header bg-dark">
        <div className="top-header">
          <div className="container">
            <div className="logo">
              <h1>Logo</h1>
            </div>

            <ul className="top-social-menu">
              <li></li>
              <li><a href="/"><FontAwesomeIcon icon={["fab", "facebook"]}/></a></li>
              <li><a href="/"><FontAwesomeIcon icon={["fab", "linkedin"]}/></a></li>
              <li><a href="/"><FontAwesomeIcon icon={["fab", "youtube"]}/></a></li>
              <li><a href="/"><FontAwesomeIcon icon={["fab", "amazon"]} /></a></li>
              <li><a href="/"><FontAwesomeIcon icon={["fab", "google"]} /></a></li>
            </ul>

            <div className="login-area">
              <a href="/" className="btn btn-primary">
                <span> <FontAwesomeIcon icon={["fas", "sign-in-alt"]} /> </span>Login{" "}
              </a>
              <a href="/" className="btn ml-2">
                  <span><FontAwesomeIcon icon={["fas", "user-plus"]} /></span>Sign Up{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="nav-header">
            <nav className="navbar">
              <ul class="navbar-list">
                <li>
                  <Link className="link" to="/">HOME</Link>
                </li>
                <li>
                  <Link className="link" to="/games">GAMES </Link><FontAwesomeIcon icon={["fas", "chevron-down"]}/>
                  <ul class="dropdown">
                    <li>
                      <Link className="link" to={`/games`}>GAME I</Link>
                    </li>
                    <li>
                      <Link className="link" to={`/games`}>GAME II</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="link" to="/news"> NEWS</Link>
                </li>
                <li>
                  <Link className="link" to="/blogs"> BLOG</Link><FontAwesomeIcon icon={["fas", "chevron-down"]}/>
                  <ul class="dropdown">
                    <li>
                      <Link className="link" to="/blogs">BLOG I</Link>
                    </li>
                    <li>
                      <Link className="link" to="/blogs">BLOG II</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="link" to="/software">SOFTWARE</Link>
                </li>
                <li>
                  <Link className="link" to="/contact">CONTACT</Link>
                </li>
              </ul>

              <div className="search-area">

                <form action="">
                  <input type="search" placeholder="Search" />
                  <button type="submit" className="btn"><FontAwesomeIcon icon={["fas", "search"]} /></button>
                </form>

              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
