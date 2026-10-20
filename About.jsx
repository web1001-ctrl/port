import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="section-title">
        <span>01</span>
        <h2>Men haqimda</h2>
      </div>

      <div className="about-content">

        <div className="about-card">
          <div className="about-number">01</div>

          <h3>Frontend Developer</h3>

          <p>
            Men web dasturlashga qiziqaman va zamonaviy
            web interfeyslar yaratish ustida ishlayman.
          </p>
        </div>

        <div className="about-text">

          <p>
            Mening ismim <strong>Hamroyev Og'abek</strong>.
            Men HTML, CSS, React, Sass va Canva texnologiyalarini
            bilaman.
          </p>

          <p>
            Maqsadim — foydalanuvchilar uchun qulay,
            chiroyli va responsive web saytlar yaratish.
          </p>

          <div className="about-info">
            <div>
              <strong>HTML</strong>
              <span>Web Structure</span>
            </div>

            <div>
              <strong>CSS</strong>
              <span>Web Design</span>
            </div>

            <div>
              <strong>React</strong>
              <span>Frontend</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;