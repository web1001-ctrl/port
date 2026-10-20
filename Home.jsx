import "./Home.css";

function Home() {
  return (
    <section className="home" id="home">

      <div className="home-bg"></div>

      <div className="home-content">

        <div className="home-badge">
          <span className="status-dot"></span>
          Frontend Developer
        </div>

        <h1>
          Salom, men
          <br />
          <span>Hamroyev Og'abek</span>
        </h1>

        <p className="home-text">
          Zamonaviy va kreativ web saytlar yarataman.
          HTML, CSS, React, Sass va Canva yordamida
          chiroyli hamda responsive interfeyslar ishlab chiqaman.
        </p>

        <div className="home-buttons">

          <a href="#projects" className="home-btn primary">
            Loyihalarim
            <span>→</span>
          </a>

          <a href="#contact" className="home-btn secondary">
            Bog'lanish
          </a>

        </div>

        <div className="home-socials">

          <a href="#">GitHub</a>
          <span>/</span>

          <a href="https://t.me/OgabekHamroyew">Telegram</a>
          <span>/</span>

          <a href="https://www.instagram.com/khamroyev.xw?stkn=OWJkbGZ4d2N6cncy">Instagram</a>

        </div>

      </div>


      <div className="home-visual">

        <div className="circle circle-one"></div>
        <div className="circle circle-two"></div>

        <div className="developer-card">

          <div className="card-top">
            <div className="avatar">
              H
            </div>

            <div>
              <h3>Hamroyev Og'abek</h3>
              <p>Frontend Developer</p>
            </div>
          </div>

          <div className="card-line"></div>

          <div className="technologies">

            <span>HTML</span>
            <span>CSS</span>
            <span>React</span>
            <span>Sass</span>
            <span>Canva</span>

          </div>

          <div className="card-bottom">

            <div>
              <strong>05</strong>
              <small>Skills</small>
            </div>

            <div>
              <strong>10+</strong>
              <small>Projects</small>
            </div>

            <div>
              <strong>100%</strong>
              <small>Passion</small>
            </div>

          </div>

        </div>

        <div className="floating-tech tech-html">
          HTML
        </div>

        <div className="floating-tech tech-react">
          ⚛ React
        </div>

        <div className="floating-tech tech-css">
          CSS
        </div>

      </div>

    </section>
  );
}

export default Home;