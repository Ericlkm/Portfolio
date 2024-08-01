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
              <div className="skill-bar-fill" style={{ width: "85%" }}></div>
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
              <div className="skill-bar-fill" style={{ width: "70%" }}></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h1>Tools & Frameworks:</h1>
            <hr />
            <p>
              I'm a big fan of using modern tools and frameworks to make my life
              easier. Some of them that I use regularly include:
            </p>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Bootstrap</li>
              <li>Tailwind</li>
              <li>Semantic UI</li>
              <li>Netlify</li>
            </ul>
          </div>

          <div className="skill">
            <div className="skill-icon">
              <i className="fas fa-code-branch"></i>
            </div>
            <h1>Version Control:</h1>
            <hr />
            <p>I use Git and Github for version control and collaboration.</p>
          </div>
          <div className="skill">
            <div className="skill-icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <h1>Data Visualization:</h1>
            <hr />
            <p>
              I love to use data visualization tools to help me understand and
              communicate my information.
            </p>
          </div>
          <div className="skill">
            <div className="skill-icon">
              <i className="fas fa-user"></i>
            </div>
            <h1>Character</h1>
            <hr />
            <p>
              Even though i have the knowledge to become a software engineer i
              also must have good character traits such as.{" "}
              <details>
                <summary>
                  <strong>Personality traits:</strong>
                </summary>
                <ul>
                  <li>Intelligent</li>
                  <li>Creative</li>
                  <li>Empathetic</li>
                  <li>Open-minded</li>
                  <li>Team-oriented</li>
                  <li>Passionate</li>
                  <li>Responsible</li>
                  <li>Independent</li>
                  <li>Ambitious</li>
                  <li>Self-motivated</li>
                  <li>Thoughtful</li>
                  <li>Innovative</li>
                  <li>Problem-solving</li>
                  <li>Cooperative</li>
                  <li>Learner</li>
                  <li>Coachable</li>
                </ul>
              </details>
              <details>
                <summary>
                  <strong>MindSet:</strong>
                </summary>
                <ul>
                  <li>Never give up</li>
                  <li>Continuous learning</li>
                  <li>Focus on the present</li>
                  <li>Seek feedback</li>
                  <li>Be patient</li>
                  <li>Be kind and empathetic</li>
                  <li>Be loyal to teammates</li>
                  <li>Be a team player</li>
                  <li>Be a responsible adult</li>
                  <li>Be a good listener</li>
                  <li>Be a good team-mate</li>
                  <li>Be a good communicator</li>
                  <li>Be a good problem solver</li>
                  <li>Be a good team leader</li>
                </ul>
              </details>
            </p>
          </div>
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
