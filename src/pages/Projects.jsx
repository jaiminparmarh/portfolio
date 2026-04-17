import { useLocation, useNavigate } from "react-router-dom";


export default function Projects() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
    <section className="section">
    <center>
        <h1 style={{marginTop:"-20px"}}>Projects</h1>
        </center>

      <div className="projects-grid" style={{marginTop:"-20px"}}>
        
          <div className="project-card">
            <center>
            
            <h1>
              <span>1. POS system</span>
              </h1>
              <img src="/POS.png" alt="Profile" className="project-img"/>
              <p>
                A Point of Sale (POS) system is used by businesses to manage and complete sales
                transactions efficiently. It allows users to record product sales, calculate
                totals
              <br />
              
                <br />
                <button className="home-btn" onClick={() => navigate("/projects/project1")}>
                More...
            </button>
              </p>
              </center>
            </div>

            <div className="project-card">
              <center>
              <h1>
              <span>2. Shoot and Edit Cloud Studio</span>
              </h1>
              <img src="/Studio.png" alt="Profile" className="project-img"/>
              
              
              <p>
                Shoot & Edit Cloud Studio is a creative digital studio focused on delivering high-quality visual and audio content. We specialize in transforming raw ideas into engaging, polished media that helps brands and individuals stand out in the digital space.
              <br />
                <br />
                <button className="home-btn" onClick={() => navigate("/projects/project2")}>
                More...
            </button>
              </p>
              </center>
            </div>

            <div className="project-card">
              <center>
              <h1>
              <span>3. TextUtils</span>
              </h1>
              <img src="/Textutils.png" alt="Profile" className="project-img"/>
              
              
              <p>
                TextUtils is a React-based web application that allows users to analyze and transform text efficiently with real-time updates. It includes multiple text formatting tools, live word and character count, reading time estimation, and dark/light mode support, demonstrating strong frontend development and state management skills.              <br />
                <br />
                <button className="home-btn" onClick={() => navigate("/projects/project3")}>
                More...
            </button>
              </p>
              </center>
            </div>
            
      </div>
      </section>
      </>
  );
}