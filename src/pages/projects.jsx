import { Link } from "react-router-dom";
import Projects from "../data/projects";

const styles = {
  ul: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    columnGap: "1rem",
    rowGap: "1rem",
  },
};

const Project = () => {
  return (
    <>
      <h1 className="major-mono-display-regular m-5">
        My Projects ({Projects.length})
      </h1>

      <div className="project-box nanum-gothic-coding-regular">
        {Projects.map((val) => {
          return (
            <>
              <div key={val.id}>
                <h2 className="major-mono-display-regular mb-3 fa-fade">
                  {val.title}
                </h2>

                <img src={val.image} />
                <p>{val.description}</p>
                <p>
                  Technology used to build this website includes:
                  <ul style={styles.ul}>
                    {val.technology.map((t) => {
                      return (
                        <li>
                          <code>{t}</code>
                        </li>
                      );
                    })}
                  </ul>
                </p>
                <div className="button-box rock-salt-regular">
                  <Link to={val.url} target="_blank">
                    <button className="btn btn-info p-2">
                      View Website <i className="fab fa-webflow fa-bounce"></i>
                    </button>
                  </Link>
                  &nbsp;
                  <Link to={val.codeSource} target="_blank">
                    <button className="btn btn-success p-2">
                      View Source code <i className="fas fa-code-branch"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Project;
