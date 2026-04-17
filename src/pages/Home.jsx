import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
    
    <section className="hero">
      <div className="hero-content-wrapper">
        <div id="About" className="hero-content">
            <h1>Hi, I'm <br /> <span>Jaimin H. Parmar</span></h1>
            <h2 class="typing-text">Frontend Developer | React JS</h2>
            <p>
                I build modern web interfaces where design meets functionality.
                <br />
                As an MCA student and frontend developer, I enjoy creating responsive,
                clean, and user-focused web experiences using modern technologies.
            </p>

            <div class="social-icons">
                <a href="https://github.com/jaiminparmarh"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/jaiminparmarh/"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jaiminparmar3110@gmail.com"><i className="fas fa-envelope"></i></a>
            </div>

        </div>
        </div>
    </section>
    <br />
    <br />
    <section class="section">
    <div id="CoreSkills" class="container">
      <h2>Core Skills</h2>

      <ul class="skills-list">
        <li>HTML5 & CSS3 (Responsive Design)</li>
        <li>JavaScript (ES6+)</li>
        <li>React JS (Components, Hooks, Routing)</li>
        <li>Basic PHP & Backend Concepts</li>
        <li>UI Design & Layout Optimization</li>
        <li>Video Editing & Graphic Design</li>
      </ul>

      <button className="home-btn" onClick={() => navigate("/skills")}>
              View All Skills
            </button>
    </div>
  </section>

  <section class="section">
    <div id="Whyme" class="container">
      <h2>Why Choose Me?</h2>

      <ul class="why-list">
        <li>Strong foundation in frontend technologies</li>
        <li>Clean, readable, and maintainable code</li>
        <li>Creative mindset with technical skills</li>
        <li>Fast learner and self-motivated developer</li>
        <li>Good understanding of UI/UX principles</li>
      </ul>
    </div>
  </section>

  <section class="section">
    <div id="WorkTogether" class="container">
      <h2>Let's Work Together</h2>

      <p>
        I am actively looking for opportunities to grow as a web developer.
        If you have a project, internship, or collaboration in mind,
        feel free to reach out.
      </p>
      <button className="home-btn" onClick={() => navigate("/contact")}>
              Get in touch
            </button>
    </div>
  </section>
    </>
  );
}
