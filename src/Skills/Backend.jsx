export default function backend() {
  return (
    <div>
      <section className="section">
    <h2>Backend Development</h2>
    <p>
      I understand backend concepts including server-side logic, databases,
      and version control.
    </p>
    <ul>
      <li><strong>Node.js</strong>  Basic server-side development</li>
      <li><strong>Git & GitHub</strong>  Version control and collaboration</li>
      <li><strong>PHP</strong>  Server-side scripting</li>
      <li><strong>VB.NET</strong>  Desktop and backend logic</li>
      <li><strong>MySQL Server</strong>  Database design and queries</li>
    </ul>

    {location.pathname === "/skills/backend" && (
          <>
            <p class="section-intro">
      I have a strong understanding of backend development fundamentals,
      including server-side logic, database management, and application
      workflow. I focus on writing structured, maintainable, and secure
      backend code while following best development practices.
    </p>

    <div class="skills-list">

      <div class="skill-item">
        <h3>Node.js</h3>
        <p>
          Basic server-side development using Node.js. Experience in handling
          HTTP requests, creating simple REST APIs, managing routes, and
          working with middleware. Familiar with asynchronous programming
          concepts and server-client communication.
        </p>
      </div>

      <div class="skill-item">
        <h3>PHP</h3>
        <p>
          Experience in server-side scripting using PHP for dynamic web
          applications. Knowledge of form handling, data validation,
          session management, and integrating PHP with MySQL databases.
        </p>
      </div>

      <div class="skill-item">
        <h3>MySQL</h3>
        <p>
          Strong understanding of relational database concepts including
          database design, table relationships, normalization, and writing
          optimized SQL queries. Experienced in CRUD operations, joins,
          indexing, and basic performance optimization.
        </p>
      </div>

      <div class="skill-item">
        <h3>Git & GitHub</h3>
        <p>
          Proficient in version control using Git and GitHub. Experience
          with repository management, branching, committing changes,
          resolving merge conflicts, and collaborating on projects using
          GitHub workflows.
        </p>
      </div>

      <div class="skill-item">
        <h3>VB.NET</h3>
        <p>
          Experience in developing desktop and backend logic using VB.NET.
          Knowledge of application workflows, database connectivity,
          and handling business logic in Windows-based applications.
        </p>
      </div>

    </div>
          </>
        )}

  </section>
    </div>
  );
}

