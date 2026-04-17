export default function Tools() {
  return (
    <div>
      {/* Tools */}
      <section className="section">
        <h2>Tools & Software</h2>
        <p>
          I use modern development tools to improve productivity and code quality.
        </p>
        <ul>
          <li>Visual Studio</li>
          <li>Visual Studio Code</li>
          <li>GitHub</li>
          <li>SQL Server Management Studio</li>
        </ul>

        <p className="section-subtitle">
          I use modern development tools and software to improve productivity,
          maintain clean code, and follow best development practices throughout
          the project lifecycle.
        </p>

        <div className="tools-grid">
          <div className="tool-card">
            <i className="fa-solid fa-code tool-icon"></i>
            <h3>Visual Studio</h3>
            <p>
              Experienced in using Visual Studio for building and debugging
              applications with a structured development workflow, code analysis,
              and integrated debugging tools.
            </p>
          </div>

          <div className="tool-card">
            <i className="fa-solid fa-laptop-code tool-icon"></i>
            <h3>Visual Studio Code</h3>
            <p>
              My primary code editor for web development. I use extensions,
              shortcuts, Git integration, and debugging features to write clean,
              efficient, and maintainable code.
            </p>
          </div>

          <div className="tool-card">
            <i className="fa-brands fa-github tool-icon"></i>
            <h3>GitHub</h3>
            <p>
              Proficient in using GitHub for version control, repository management,
              collaboration, and tracking project changes using Git workflows.
            </p>
          </div>

          <div className="tool-card">
            <i className="fa-solid fa-database tool-icon"></i>
            <h3>SQL Server Management Studio</h3>
            <p>
              Experienced in managing databases, writing SQL queries, performing
              data manipulation, and maintaining structured relational databases.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

