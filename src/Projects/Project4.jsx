import { useNavigate } from "react-router-dom";

export default function Project4() {
  const navigate = useNavigate();

  return (
    <div>
      <section id="Project4" className="section project-detail">
        <button className="home-btn project-back-btn" onClick={() => navigate("/projects")}>
          Back to Projects
        </button>

        <div className="project-hero-layout">
          <div>
            <p className="project-kicker">Case Study 04</p>
            <h1>Project and Task Management System</h1>
            <div className="project-chip-row">
              <span className="project-chip">React.js + Vite</span>
              <span className="project-chip">Node.js + Express</span>
              <span className="project-chip">JWT RBAC</span>
              <span className="project-chip">REST API</span>
            </div>
            <p className="project-lead">
              A full-stack, role-based web application built to solve real
              project coordination problems in software teams. The platform
              centralizes project planning, module assignment, progress
              tracking, approval workflows, and team communication in one
              system, replacing scattered spreadsheets and chat-based task
              management.
            </p>
          </div>

          <img
            src="/Project&Task.png"
            alt="Project and Task Management dashboard"
            className="project-img project-img-large"
          />
        </div>

        <div className="project-feature-grid">
          <h2 className="section-title">What Problem It Solves</h2>
          <div className="service-item">
            <ul>
              <li>Unclear task ownership</li>
              <li>Delayed progress visibility</li>
              <li>Unstructured module tracking</li>
              <li>Scattered communication</li>
              <li>Difficult performance evaluation</li>
            </ul>
            <p className="services-footer">
              The system provides one source of truth where Admins, Managers,
              and Employees collaborate with controlled access and traceable
              workflows.
            </p>
          </div>
        </div>

        <div className="project-feature-grid">
          <h2 className="section-title">Tech Stack and Languages</h2>
          <div className="services-list">
            <div className="service-item">
              <h3>Frontend</h3>
              <p>React.js, Vite, JavaScript, CSS</p>
            </div>
            <div className="service-item">
              <h3>Backend</h3>
              <p>Node.js, Express.js, JavaScript</p>
            </div>
            <div className="service-item">
              <h3>Authentication and Security</h3>
              <p>JWT, bcryptjs, role-based authorization</p>
            </div>
            <div className="service-item">
              <h3>Data and APIs</h3>
              <p>Structured JSON datastore and REST APIs with Fetch API</p>
            </div>
          </div>
        </div>

        <div className="project-feature-grid">
          <h2 className="section-title">Core Functionalities</h2>
          <div className="services-list">
            <div className="service-item">
              <h3>Role-Based Access</h3>
              <p>
                Secure login and role-specific dashboards for Admin, Manager,
                and Employee workflows.
              </p>
            </div>
            <div className="service-item">
              <h3>Project and Team Management</h3>
              <p>
                Project lifecycle management, manager assignment, team handling,
                and employee role control.
              </p>
            </div>
            <div className="service-item">
              <h3>Module Workflow</h3>
              <p>
                Module planning with status tracking (pending, in progress,
                completed) and completion request approvals.
              </p>
            </div>
            <div className="service-item">
              <h3>Communication and Analytics</h3>
              <p>
                Project-specific chat with unread/read tracking plus dashboard
                analytics for project and employee performance visibility.
              </p>
            </div>
          </div>
        </div>

        <div className="project-feature-grid">
          <h2 className="section-title">Real-World Use Case</h2>
          <div className="service-item">
            <p>
              In a medium software company handling multiple projects, Admins
              create projects and assign managers, Managers break work into
              modules and assign team members, and Employees update progress and
              submit completion requests. Team leaders approve or reject module
              completion while stakeholders communicate in project-specific chat.
              Leadership monitors deadlines, productivity, and execution health
              through dashboards.
            </p>
            <p className="services-footer">
              Result: faster coordination, better transparency, reduced delays,
              and stronger accountability.
            </p>
          </div>
        </div>

        <div className="project-feature-grid">
          <h2 className="section-title">Architecture Highlights</h2>
          <div className="service-item">
            <ul>
              <li>Clean role-based design with separated responsibilities</li>
              <li>API-driven frontend-backend communication</li>
              <li>Middleware-based access control</li>
              <li>Modular structure for maintainability and scaling</li>
              <li>Upgrade-ready architecture for SQL/NoSQL and sockets</li>
            </ul>
          </div>
        </div>

      </section>
    </div>
  );
}
