import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header>
        <div>
          <nav className="navbar">
            <Link to="/" className="text-decoration-none">
              <h1 className="nav-title">Eric's Portfolio</h1>
            </Link>
            <ul className="nav-item">
              <Link to="/">
                <li className="navLink">
                  <ruby>
                    Home
                    <rt>
                      <i className="fas fa-home-alt p-1"></i>
                    </rt>
                  </ruby>
                </li>
              </Link>
              <Link to="/skills">
                <li>
                  <ruby>
                    Skills
                    <rt>
                      <i class="fa-solid fa-code p-1"></i>
                    </rt>
                  </ruby>
                </li>
              </Link>
              <Link to="/projects">
                <li>
                  <ruby>
                    Projects
                    <rt>
                      <i className="fa-solid fa-diagram-project p-1"></i>
                    </rt>
                  </ruby>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
