// components/Sidebar.jsx
import { useLocation, useNavigate } from "react-router-dom";

const resumeUrl = "/Jaimin Parmar Resume (2).pdf";

const handleViewResume = () => {
  window.open(resumeUrl, "_blank");
};

const handleDownloadResume = () => {
  const confirmDownload = window.confirm("Download resume?");
  if (confirmDownload) {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Jaimin_Parmar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export default function Sidebar(props) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      {/* PROFILE SECTION */}
      <div className="sidebar-2">
        <img src="/Jaimin.png" alt="Profile" className="profile-img none" />

        <span className="pronouns none">He / Him</span>
        <h3 className="name none">{props.Name}</h3>

        <a
          className="none"
          href="tel:+918401613110"
          style={{ textDecoration: "none", fontWeight: 500, color: "darkgray" }}
        >
          +91 8401613110
        </a>

        <a
          className="none"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jaiminparmar3110@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", fontWeight: 500, color: "darkgray" }}
        >
          jaiminparmar3110@gmail.com
        </a>

        <span className="none" style={{ marginTop: "8px" }}>My Resume</span>

        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button className="btn-resume none" onClick={handleViewResume}>
            View
          </button>
          <button className="btn-resume none" onClick={handleDownloadResume}>
            Download
          </button>
        </div>

        <span className="none" style={{ marginTop: "8px" }}>Education</span>
        <span className="pronouns none">BCA & MCA</span>
      </div>

      {/* NAVIGATION SECTION */}
      <div className="sidebar">
        {location.pathname === "/" && (
          <>
            <button className="btn-sidebar" onClick={() => scrollTo("CoreSkills")}>
              Core Skills
              </button>
            <button className="btn-sidebar" onClick={() => scrollTo("Whyme")}>
              Why me?
              </button>
            <button className="btn-sidebar" onClick={() => scrollTo("WorkTogether")}>
              Work Together
              </button>
          </>
        )}

     {/* Skills */}
        {/* Main Page */}
        {location.pathname === "/skills" && (
          <>
            <button className="btn-sidebar" onClick={() => navigate("/skills/frontend")}>
              Frontend
            </button>

            <button className="btn-sidebar" onClick={() => navigate("/skills/backend")}>
              Backend
            </button>

            <button className="btn-sidebar" onClick={() => navigate("/skills/Tools")}>
              Tools
            </button>

            <button className="btn-sidebar"onClick={() => navigate("/skills/Creativeskills")}>
              Creative Skills
            </button>
          </>
        )}

        {/* Frontend */}
        {location.pathname === "/skills/frontend" && (
          <>
            <button className="btn-sidebar" onClick={() => navigate("/skills/frontend")}>
              Frontend
            </button>

            <button className="btn-sidebar" onClick={() => navigate("/skills/backend")}>
              Backend
            </button>

            <button className="btn-sidebar" onClick={() => navigate("/skills/Tools")}>
              Tools
            </button>

            <button className="btn-sidebar"onClick={() => navigate("/skills/Creativeskills")}>
              Creative Skills
            </button>
          </>
        )}

        {/* Backend */}
        {location.pathname === "/skills/backend" && (
          <>
            <button className="btn-sidebar" onClick={() => navigate("/skills/frontend")}>
              Frontend
            </button>

            <button className="btn-sidebar" onClick={() => navigate("/skills/backend")}>
              Backend
            </button>

            <button className="btn-sidebar" onClick={() => navigate("/skills/Tools")}>
              Tools
            </button>

            <button className="btn-sidebar"onClick={() => navigate("/skills/Creativeskills")}>
              Creative Skills
            </button>
          </>
        )}
        {/* Tools */}
        {location.pathname === "/skills/Tools" && (
          <>
            <button className="btn-sidebar" onClick={() => navigate("/skills/frontend")}>
              Frontend
            </button>

            <button className="btn-sidebar" onClick={() => navigate("/skills/backend")}>
              Backend
            </button>

            <button className="btn-sidebar" onClick={() => navigate("/skills/Tools")}>
              Tools
            </button>

            <button className="btn-sidebar"onClick={() => navigate("/skills/Creativeskills")}>
              Creative Skills
            </button>
          </>
        )}
        {/* Creativeskills */}
        {location.pathname === "/skills/Creativeskills" && (
          <>
            <button className="btn-sidebar" onClick={() => navigate("/skills/frontend")}>
              Frontend
            </button>

            <button className="btn-sidebar" onClick={() => navigate("/skills/backend")}>
              Backend
            </button>

            <button className="btn-sidebar" onClick={() => navigate("/skills/Tools")}>
              Tools
            </button>

            <button className="btn-sidebar"onClick={() => navigate("/skills/Creativeskills")}>
              Creative Skills
            </button>
          </>
        )}
      

      {/* Project */}
        {/* Main Page */}
        {location.pathname === "/Projects" && (
          <>
            <button className="btn-sidebar" onClick={() => navigate("/projects/Project1")}>
              <span>POS system</span>
            </button>

            <button className="btn-sidebar" onClick={() => navigate("/projects/Project2")}>
              <span>Shoot & Edit Studio</span>
            </button>

            <button className="btn-sidebar" onClick={() => navigate("/projects/Project3")}>
              <span>TextUtils</span>
            </button>

          </>
        )}
        {/* Project 1 */}
        {location.pathname === "/projects/Project1" && (
          <>
            <button className="btn-sidebar" onClick={() => navigate("/projects/Project1")}>
              
              <span>POS system</span>
            </button>

            <button className="btn-sidebar" onClick={() => navigate("/projects/Project2")}>
              
              <span>Shoot & Edit Studio</span>
            </button>

            <button className="btn-sidebar" onClick={() => navigate("/projects/Project3")}>
              <span>TextUtils</span>
            </button>

          </>
        )}
        {/* Project 2 */}
        {location.pathname === "/projects/Project2" && (
          <>
            <button className="btn-sidebar" onClick={() => navigate("/projects/Project1")}>
              <span>POS system</span>
            </button>

            <button className="btn-sidebar" onClick={() => navigate("/projects/Project2")}>
              <span>Shoot & Edit Studio</span>
            </button>

            <button className="btn-sidebar" onClick={() => navigate("/projects/Project3")}>
              <span>TextUtils</span>
            </button>

          </>
        )}
        {/* Project 3 */}
        {location.pathname === "/projects/Project3" && (
          <>
            <button className="btn-sidebar" onClick={() => navigate("/projects/Project1")}>
              <span>POS system</span>
            </button>

            <button className="btn-sidebar" onClick={() => navigate("/projects/Project2")}>
              <span>Shoot & Edit Studio</span>
            </button>

            <button className="btn-sidebar" onClick={() => navigate("/projects/Project3")}>
              <span>TextUtils</span>
            </button>

          </>
        )}

        {location.pathname === "/about" && (
          <>
            <button className="btn-sidebar" onClick={() => scrollTo("education")}>
              Education
              </button>
            <button className="btn-sidebar" onClick={() => scrollTo("experience")}>
              Experience
              </button>
            <button className="btn-sidebar" onClick={() => scrollTo("freelancing")}>
              Freelancing
              </button>
          </>
        )}
      </div>
    </div>
  );
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}