export default function About() {
  return (
    <>
    <div>
      <section className="section" id="education">
        <h1 style={{marginTop:"-20px"}}>Education</h1>
        <div class="edu-card">
        <h3>Bachelor of Computer Applications (BCA)</h3>
        <span>Sardar Patel University</span>
        <p>
          Completed undergraduate degree with strong fundamentals
          in programming, database management, web technologies,
          and software development concepts.
        </p>
        <div class="status">CGPA: 6.6</div>
      </div>
      
      <div class="edu-card">
        <h3>Master of Computer Applications (MCA)</h3>
        <span>Currently Pursuing</span>
        <p>
          Advanced study in software engineering, web development,
          backend technologies, and modern application development.
        </p>
        <div class="status">4th Semester – Ongoing</div>
      </div>
      </section>


      <section className="section" id="experience">
        <h1 style={{marginTop:"-20px"}}>Experience</h1>
              
      <div class="exp-card">
        <h3>Academic & Technical Experience</h3>
        <span>BCA & MCA (Currently Studying)</span>

        <ul>
          <li>Strong understanding of HTML, CSS, JavaScript, and PHP through academic projects.</li>
          <li>Built responsive web pages and basic web applications.</li>
          <li>Hands-on experience with frontend development concepts and backend basics.</li>
          <li>Worked on college projects using modern web technologies.</li>
        </ul>

        <div class="tag">HTML</div>
        <div class="tag">CSS</div>
        <div class="tag">JavaScript</div>
        <div class="tag">PHP</div>
      </div>
      </section>

      <section className="section" id="freelancing">
        <div class="exp-card">
        <h1 style={{marginTop:"-20px"}}>Freelance Creative Experience</h1>
        <h3>Video, Graphics & Sound Editing</h3>

        <ul>
          <li>Worked as a freelancer in video editing for social media and client projects.</li>
          <li>Designed graphics for banners, thumbnails, and digital content.</li>
          <li>Edited and enhanced audio for videos and presentations.</li>
          <li>Delivered client work with focus on quality and deadlines.</li>
        </ul>

        <div class="tag">Video Editing</div>
        <div class="tag">Graphic Design</div>
        <div class="tag">Sound Editing</div>
        <div class="tag">Freelancing</div>
      </div>
      </section>
    </div>
    </>
  );
}