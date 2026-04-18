import { useNavigate } from "react-router-dom";

export default function Project3() {
  const navigate = useNavigate();

  return (
    <div>
      <section id="Project3" className="section project-detail">
        <button className="home-btn project-back-btn" onClick={() => navigate("/projects")}>
          Back to Projects
        </button>

        <div className="project-hero-layout">
          <div>
            <p className="project-kicker">Case Study 03</p>
            <h1>TextUtils</h1>
            <div className="project-chip-row">
              <span className="project-chip">ReactJS</span>
              <span className="project-chip">JavaScript</span>
              <span className="project-chip">Text Utility</span>
            </div>
            <p className="project-lead">
              TextUtils is a responsive web application built using React JS,
              JavaScript, HTML5, CSS3, and Bootstrap that allows users to
              analyze and transform text in real time.
            </p>
          </div>

          <img src="/Textutils.png" alt="TextUtils interface" className="project-img project-img-large"/>
        </div>

        <p className="project-paragraph">
          The application includes multiple text utilities such as converting
          text to uppercase and lowercase, removing extra spaces, sentence
          case, title case, alternating case, inverse case, copying text to the
          clipboard, downloading text as a file, and clearing the editor.
        </p>

        <p className="project-paragraph">
          It also displays a live text summary including word count, character
          count, estimated reading time, and instant preview updates. A built-in
          dark and light mode toggle improves accessibility and user experience.
        </p>

        <p className="project-paragraph">
          The project demonstrates a strong understanding of React components,
          state management with useState, event handling, conditional rendering,
          reusable UI components, and responsive design principles.
        </p>
            </section>
    </div>
  );
}