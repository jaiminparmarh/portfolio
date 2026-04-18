export default function About() {
  return (
    <>
      <div>
      <section className="section" id="education">
        <h1>Education</h1>
        <div className="edu-card">
        <h3>Bachelor of Computer Applications (BCA)</h3>
        <span>Sardar Patel University</span>
        <p>
          Completed undergraduate degree with strong fundamentals
          in programming, database management, web technologies,
          and software development concepts.
        </p>
        <div className="status">CGPA: 6.6</div>
      </div>
      
      <div className="edu-card">
        <h3>Master of Computer Applications (MCA)</h3>
        <span>Currently Pursuing</span>
        <p>
          Advanced study in software engineering, web development,
          backend technologies, and modern application development.
        </p>
        <div className="status">4th Semester - Ongoing</div>
      </div>
      </section>


      <section className="section" id="experience">
        <h1>Experience</h1>

      <div className="exp-card">
        <h3>ReactJS Internship</h3>
        <span>BIT Infotech | 4 Months | MCA Final Semester</span>

        <ul>
          <li>Completed a 4-month internship focused on ReactJS development.</li>
          <li>Built and improved responsive UI components and page layouts.</li>
          <li>Worked with reusable components, hooks, and routing structure.</li>
          <li>Improved code quality, styling consistency, and mobile responsiveness.</li>
        </ul>

        <div className="tag">ReactJS</div>
        <div className="tag">Frontend</div>
        <div className="tag">Responsive UI</div>
        <div className="tag">Internship</div>
      </div>
              
      <div className="exp-card">
        <h3>Academic & Technical Experience</h3>
        <span>BCA & MCA (Currently Studying)</span>

        <ul>
          <li>Strong understanding of HTML, CSS, JavaScript, and PHP through academic projects.</li>
          <li>Built responsive web pages and basic web applications.</li>
          <li>Hands-on experience with frontend development concepts and backend basics.</li>
          <li>Worked on college projects using modern web technologies.</li>
        </ul>

        <div className="tag">HTML</div>
        <div className="tag">CSS</div>
        <div className="tag">ReactJS</div>
        <div className="tag">Bootstrap 5</div>
        <div className="tag">JavaScript</div>
        <div className="tag">PHP</div>
      </div>
      </section>

      <section className="section" id="freelancing">
        <div className="exp-card">
        <h1>Freelance Creative Experience</h1>
        <h3>Video, Graphics & Sound Editing</h3>

        <ul>
          <li>Worked as a freelancer in video editing for social media and client projects.</li>
          <li>Designed graphics for banners, thumbnails, and digital content.</li>
          <li>Edited and enhanced audio for videos and presentations.</li>
          <li>Delivered client work with focus on quality and deadlines.</li>
        </ul>

        <div className="tag">Video Editing</div>
        <div className="tag">Graphic Design</div>
        <div className="tag">Sound Editing</div>
        <div className="tag">Freelancing</div>
      </div>
      </section>
    </div>
    </>
  );
}