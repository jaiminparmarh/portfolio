import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-page">
        <section className="hero home-animate home-animate-1">
          <div className="hero-content-wrapper">
            <div id="About" className="hero-content">
              <h1>
                Hi, I&apos;m <br /> <span>Jaimin H. Parmar</span>
              </h1>
              <h2 className="typing-text">Frontend Developer | React</h2>
              <p>
                I build modern web interfaces where design meets functionality.
                <br />
                I recently completed a 4-month ReactJS internship at BIT
                Infotech during my last semester of MCA, where I worked on
                responsive, clean, and user-focused web experiences.
              </p>

              <div className="social-icons">
                <a href="https://github.com/jaiminparmarh" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/jaiminparmarh/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="mailto:jaiminparmar3110@gmail.com">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section home-animate home-animate-2">
          <div id="CoreSkills" className="container">
            <h2>Core Skills</h2>

            <ul className="skills-list">
              <li>HTML5 and CSS3 (responsive design)</li>
              <li>JavaScript</li>
              <li>React JS (components, hooks, routing)</li>
              <li>Basic PHP and backend concepts</li>
              <li>UI design and layout optimization</li>
              <li>Video editing and graphic design</li>
            </ul>

            <button className="home-btn" onClick={() => navigate("/skills")}>
              View All Skills
            </button>
          </div>
        </section>

        <section className="section home-animate home-animate-3">
          <div id="Whyme" className="container">
            <h2>Why Choose Me?</h2>

            <ul className="why-list">
              <li>Strong foundation in frontend technologies</li>
              <li>Completed 4-month ReactJS internship at BIT Infotech</li>
              <li>Clean, readable, and maintainable code</li>
              <li>Creative mindset with technical skills</li>
              <li>Fast learner and self-motivated developer</li>
              <li>Good understanding of UI and UX principles</li>
            </ul>
          </div>
        </section>

        <section className="section home-animate home-animate-4">
          <div id="WorkTogether" className="container">
            <h2>Let&apos;s Work Together</h2>

            <p>
              I am actively looking for opportunities to grow as a web
              developer. If you have a project, internship, or collaboration in
              mind, feel free to reach out.
            </p>
            <button className="home-btn" onClick={() => navigate("/contact")}>
              Get in Touch
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
