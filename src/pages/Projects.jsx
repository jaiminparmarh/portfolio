import { useNavigate } from "react-router-dom";


export default function Projects() {
  const navigate = useNavigate();
  const editingPreviewImages = Array.from({ length: 14 }, (_, index) => `/Editing/${index + 1}.png`);
  const projectTaskPreviewImages = Array.from({ length: 23 }, (_, index) => `/Project-Task/${index + 1}.png`);

  return (
    <>
    <section className="section projects-showcase">
        <div className="projects-showcase-header">
          <p className="project-kicker">Featured Work</p>
          <h1>Projects</h1>
          <p>
            A collection of practical and creative projects focused on user
            experience, performance, and clean frontend architecture.
          </p>
        </div>

      <div className="projects-grid">
        <article className="project-card project-card--modern">
          <div className="studio-preview studio-preview-card" aria-label="Project and Task card preview gallery">
            <div className="studio-preview-track studio-track-projecttask">
              {[...projectTaskPreviewImages, ...projectTaskPreviewImages].map((imagePath, index) => (
                <img
                  key={`${imagePath}-task-card-${index}`}
                  src={imagePath}
                  alt={`Project and Task card preview ${index % projectTaskPreviewImages.length + 1}`}
                  className="studio-preview-image studio-preview-image-card"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="project-card-content">
            <div className="project-chip-row">
              <span className="project-chip">React + Vite</span>
              <span className="project-chip">Node + Express</span>
              <span className="project-chip">JWT RBAC</span>
            </div>
            <h2>Project and Task Management System</h2>
            <p>
              A role-based full-stack application that centralizes project
              planning, module assignments, approvals, progress tracking, and
              team communication in one platform.
            </p>
            <button className="home-btn" onClick={() => navigate("/projects/project4")}>
              Explore Case Study
            </button>
          </div>
        </article>

        <article className="project-card project-card--modern">
          <div className="studio-preview studio-preview-card" aria-label="Shoot and Edit card preview gallery">
            <div className="studio-preview-track studio-track-editing">
              {[...editingPreviewImages, ...editingPreviewImages].map((imagePath, index) => (
                <img
                  key={`${imagePath}-card-${index}`}
                  src={imagePath}
                  alt={`Shoot and Edit card preview ${index % editingPreviewImages.length + 1}`}
                  className="studio-preview-image studio-preview-image-card"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="project-card-content">
            <div className="project-chip-row">
              <span className="project-chip">PHP</span>
              <span className="project-chip">MySQL</span>
              <span className="project-chip">Creative Platform</span>
            </div>
            <h2>Shoot and Edit Cloud Studio</h2>
            <p>
              A digital media service platform for video, photo, audio, and
              creative production workflows from planning to final delivery.
            </p>
            <button className="home-btn" onClick={() => navigate("/projects/project2")}>
              Explore Case Study
            </button>
          </div>
        </article>

        <article className="project-card project-card--modern">
          <img src="/Textutils.png" alt="TextUtils" className="project-img project-card-img"/>
          <div className="project-card-content">
            <div className="project-chip-row">
              <span className="project-chip">ReactJS</span>
              <span className="project-chip">JavaScript</span>
              <span className="project-chip">Productivity Tool</span>
            </div>
            <h2>TextUtils</h2>
            <p>
              A fast text utility app with transformation tools, live metrics,
              and readability-focused UX for day-to-day writing workflows.
            </p>
            <button className="home-btn" onClick={() => navigate("/projects/project3")}>
              Explore Case Study
            </button>
          </div>
        </article>

        <article className="project-card project-card--modern">
          <img src="/POS.png" alt="POS System" className="project-img project-card-img"/>
          <div className="project-card-content">
            <div className="project-chip-row">
              <span className="project-chip">VB.NET</span>
              <span className="project-chip">MySQL</span>
              <span className="project-chip">Business App</span>
            </div>
            <h2>POS System</h2>
            <p>
              A billing and inventory-focused Point of Sale solution that helps
              businesses process transactions quickly and accurately.
            </p>
            <button className="home-btn" onClick={() => navigate("/projects/project1")}>
              Explore Case Study
            </button>
          </div>
        </article>
            
      </div>
      </section>
      </>
  );
}