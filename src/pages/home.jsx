import { Link } from "react-router-dom";
import mySelf from "../images/mySelf.png";

function Home() {
  return (
    <>
      <div className="home">
        <div className="img">
          <img className="myImg" src={mySelf} />
        </div>
        <div
          className="nanum-gothic-coding-regular"
          style={{ width: "90%", margin: "1rem" }}
        >
          <h1 className="intro">
            {" "}
            <span className="name3">
              I'm{" "}
              <span className="name">
                Eric Lackram, <br />{" "}
              </span>
              a Frontend Developer
            </span>{" "}
          </h1>
          <p style={{ marginTop: "1rem" }}>
            with a passion for learning and building innovative solutions. I
            graduated from the University of Central Florida -{" "}
            <a
              href="https://www.ucf.edu/"
              target="_blank"
              className="text-decoration-none"
            >
              UCF
            </a>{" "}
            and successfully completed a coding bootcamp program known as{" "}
            <a
              href="https://www.edx.org/"
              className="text-decoration-none"
              target="_blank"
            >
              edX
            </a>{" "}
            earning a certificate in Full Stack Web Developement.
          </p>
          <p>
            I have worked on various projects, from small basic projects to more
            advance difficult applications, showcasing my ability to design and
            develop efficient software solutions. I am currently looking for
            opportunities to collaborate with talented developers to bring their
            ideas to life.{" "}
            <a href="#footer" className="text-decoration-none">
              Contact Me
            </a>
          </p>

          <section className="container">
            <div className="nanum-gothic-coding-regular">
              <div className="lang-icon">
                <div className="lang-img">
                  <img src="https://cdn-icons-png.flaticon.com/128/2786/2786969.png" />
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{ width: "85%", borderRadius: "none" }}
                    ></div>
                  </div>
                </div>
                <div className="lang-img">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/9078/9078500.png"
                    style={{ width: "120px", marginRight: "1rem" }}
                  />
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div className="lang-img">
                  <img src="https://cdn-icons-png.flaticon.com/128/9695/9695722.png" />
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div className="lang-img">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1183/1183672.png"
                    style={{ marginRight: "10px" }}
                  />
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{ width: "60%" }}
                    ></div>{" "}
                  </div>
                </div>
              </div>

              <div>
                <h3>Take a look at some of my projects and Skills:</h3>
                <p>
                  Feel free to email me or follow me on github if you want to
                  give advice or collaborate with me im open to all and any!
                </p>
                <Link to="projects">
                  <button className="btn btn-info">
                    View Projects{" "}
                    <i className="fas fa-diagram-project fa-bounce"></i>
                  </button>
                </Link>{" "}
                <Link to="skills">
                  <button className="btn btn-warning">
                    View Skills <i className="fas fa-eye fa-fade"></i>
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
