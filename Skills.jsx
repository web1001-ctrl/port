import "./Skills.css";

function Skills() {
  const skills = [
    {
      name: "HTML",
      text: "Semantic and clean structure",
      level: "90%"
    },
    {
      name: "CSS",
      text: "Modern responsive design",
      level: "85%"
    },
    {
      name: "React",
      text: "Components and UI development",
      level: "80%"
    },
    {
      name: "Sass",
      text: "Organized and scalable CSS",
      level: "75%"
    },
    {
      name: "Canva",
      text: "Creative graphic design",
      level: "85%"
    }
  ];

  return (
    <section className="skills" id="skills">

      <div className="section-title">
        <span>02</span>
        <h2>My Skills</h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>

            <div className="skill-top">
              <h3>{skill.name}</h3>
              <span>{skill.level}</span>
            </div>

            <p>{skill.text}</p>

            <div className="skill-line">
              <div
                style={{
                  width: skill.level
                }}
              ></div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;