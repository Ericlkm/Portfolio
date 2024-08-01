import { Link } from "react-router-dom";
import ShelfLife from "../images/ShelfLife.png";
import themeimg from "../images/themeimg.png";

const Project = () => {
  return (
    <>
      <h1 className="major-mono-display-regular m-5">My Projects</h1>
      <div className="project-box">
        <div>
          <h2>shelflife! </h2>
          <img src={ShelfLife} />
          <p>
            ShelfLife is a full-stack web application that allows users to
            create an account, get, post, and delete. Once users create an
            account only then they will be able to post and delete there post
          </p>
          <p>
            Technology use to build this website includes:
            <ul>
              <li>MySQL database</li>
              <li>Node.js</li>
              <li>Sequelize</li>
              <li>Express.js</li>
              <li>MVC handlebars</li>
              <li>Bootstrap</li>
              <li>Authentication</li>
              <li>bcrypt</li>
              <li>dotenv</li>
            </ul>
          </p>
          <p>Contributors: John Doe, Jane Smith</p>
          <Link
            to="https://shelflife-91f231d5543b.herokuapp.com/"
            target="_blank"
            className="btn btn-primary"
          >
            View Project
          </Link>{" "}
          <Link
            to="http://guthub.com/Ericlkm/ShelfLife"
            className="btn btn-warning"
            target="_blank"
          >
            View Source Code
          </Link>
        </div>

        <div>
          <h2>FunCast! 🎢</h2>
          <img src={themeimg} />
          <p>
            FunCast! is a web application that allows users to search for theme
            parks around the world and check the average wait times for
            attractions and shows weather forecast for that day utilizing
            openweather API. Overall FunCast is a basic application connecting
            teo API's.
          </p>
          <p>
            Technology used to build this website includes:
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>openweathermap API</li>
              <li>amusment park API</li>
            </ul>
          </p>
          <Link
            to="https://mbarrie1979.github.io/Theme-Parks-Waiting-Times-and-Weather-NEW/"
            className="btn btn-primary"
            target="_blank"
          >
            View Project
          </Link>{" "}
          <Link
            to="htto://github.com/Ericlkm/Theme-Parks-Waiting-Times-and-Weather-NEW"
            className="btn btn-warning"
            target="_blank"
          >
            View Source Code
          </Link>
        </div>

        <div>
          <h2>Project Title</h2>
          <p>Project Description</p>
          <p>Tech Stack: Python, Django, PostgreSQL</p>
          <p>Contributors: Mark Wilson, Sarah Thompson</p>
          <a href="#">View Project</a>
          <a href="#">Source Code</a>
        </div>
      </div>
    </>
  );
};

export default Project;
