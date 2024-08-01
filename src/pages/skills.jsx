export default function Skills() {
  return (
    <>
      <div className="skills-container">
        <h1>My Current Skillset:</h1>
        <div className="skills-grid">
          <div className="skill">
            <div className="skill-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h2>Web Development</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>NoSQL</li>
              <li>Bootstrap</li>
            </ul>
            <div className="skill-bar">
              <div className="skill-bar-fill" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-icon">
              <i className="fas fa-file-code"></i>
            </div>
            <h2>Frontend</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>Material-UI</li>
              <li>Semantic UI</li>
            </ul>
            <div className="skill-bar">
              <div className="skill-bar-fill" style={{ width: "70%" }}></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-icon">
              <i className="fas fa-database"></i>
            </div>
            <h2>Backend</h2>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>NoSQL</li>
              <li>MongoDB</li>
              <li>GraphQL</li>

              <li>Netlify</li>
            </ul>
            <div className="skill-bar">
              <div className="skill-bar-fill" style={{ width: "60%" }}></div>
            </div>
          </div>
          {/* <div className="skill">
            <div className="skill-icon">
              <i className="fas fa-video"></i>
            </div>
            <h2>Video Production</h2>
            <p>Adobe Premiere, After Effects, Final Cut Pro</p>
            <div className="skill-bar">
              <div className="skill-bar-fill" style={{ width: "50%" }}></div>
            </div>
          </div> */}
        </div>
        <br />

        <div className="skill">
          <div className="skill-icon">
            <i className="fas fa-comments"></i>
          </div>
          <h1>Message:</h1>
          <hr />
          <p>
            I am always eager to learn and improve my skills, so feel free to
            reach out if you have any questions, need assistance with your
            coding projects or to even teach me and correct me if i did
            something wrong!.
          </p>
          <p>
            During coding bootcamp of course i struggled at first but as time
            progressed little by little i started picking up quickly and as i
            did more projects, mini-projects, homework assignments and my own
            personal projects i believe my skills has improved greatly but of
            course im still in the beginning of my career and i dont intend to
            stop here i will only grow, become better, smart and proficent in
            Web Development.
          </p>
        </div>
      </div>
    </>
  );
}
