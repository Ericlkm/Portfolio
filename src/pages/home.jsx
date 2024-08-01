import { Link } from "react-router-dom";
import me from "../images/me.png";

function Home() {
  return (
    <>
      <div>
        <section className="container">
          <h1 className="major-mono-display-regular">Welcome to my App</h1>
          <img src={me} />
          <div className="nanum-gothic-coding-regular">
            <p>
              My name is Eric I'm a software engineer with a passion for
              learning and building innovative solutions. I recently graduated
              from the University of Central Florida (UCF) from a coding
              bootcamp called EdX coding bootcamp with a certificate in Full
              Stack Web Developement
            </p>
            <p>
              I have worked on various projects, from small basic projects to
              more advance difficult applications, showcasing my ability to
              design and develop efficient software solutions. I am currently
              looking for opportunities to collaborate with talented developers
              to bring their ideas to life.
            </p>
            <h1 className="major-mono-display-regular">
              A little into my life
            </h1>
            <p>
              Im originally from New York but when i was about seven my family
              and i moved to Florida. I went to many schools moving from place
              to place until we finally settled down. After years went on i went
              from job to job trying to find my passion and desire to see which
              career path i wanted to choose. After going though many jobs that
              i didnt like and have no motivation for i started looking for
              career jobs and thats when i found a website that introduced me to
              EdX coding bootcamp in UCF. I sign up got approved and after six
              months i sucessfully completed and passed my course earning a
              certificate in Full Stack Web Development.
            </p>
            <p>
              <h3>Some extra feature about me:</h3>I have a keen eye for detail,
              a strong communication skills, and a creative mind. I am always
              eager to learn new technologies and methodologies to improve my
              skills and stay up-to-date with the latest trends in the industry.
              I am also a bit of a fitness enthusiast, enjoying running, boxing,
              and cycling to maintain my physical health.
            </p>
            <div>
              <h3>Take a look at some of my projects and Skills:</h3>
              <p>
                Feel free to email me or follow me on github if you want to give
                advice or collaborate with me im open to all and any!
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
    </>
  );
}

export default Home;
