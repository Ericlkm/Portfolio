function Portfolio() {
  return (
    <>
      <h1>Portfolio Page</h1>
      <p>This is where you can display all your projects</p>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
        <li>Project 4</li>
        <li>Project 5</li>
      </ul>
      <button onClick={() => (window.location.href = "/contact")}>
        Contact Me
      </button>
      <button onClick={() => (window.location.href = "/about")}>
        About Me
      </button>
      <button onClick={() => (window.location.href = "/skills")}>Skills</button>
      <button onClick={() => (window.location.href = "/projects")}>
        Projects
      </button>
      <button onClick={() => (window.location.href = "/blog")}>Blog</button>
      <button onClick={() => (window.location.href = "/resume")}>Resume</button>
    </>
  );
}

export default Portfolio;
