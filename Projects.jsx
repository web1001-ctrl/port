import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Tourism Website",
      text: "Zamonaviy turizm va sayohat uchun responsive web sayt."
    },
    {
      number: "02",
      title: "Flower Shop",
      text: "Gullar do'koni uchun chiroyli va zamonaviy web interfeys."
    },
    {
      number: "03",
      title: "Portfolio",
      text: "Frontend developer uchun professional portfolio website."
    }
  ];

  return (
    <section className="projects" id="projects">

      <div className="section-title">
        <span>03</span>
        <h2>My Projects</h2>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <div className="project-card" key={project.number}>

            <div className="project-number">
              {project.number}
            </div>

            <div className="project-icon">
              &lt;/&gt;
            </div>

            <h3>{project.title}</h3>

            <p>{project.text}</p>

            <a href="#contact">
              View Project →
            </a>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;