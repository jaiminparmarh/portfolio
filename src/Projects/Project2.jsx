import { useNavigate } from "react-router-dom";

export default function Project2() {
  const navigate = useNavigate();
  const previewImages = Array.from({ length: 14 }, (_, index) => `/Editing/${index + 1}.png`);

  return (
    <div>
      <section className="section project-detail">
        <button className="home-btn project-back-btn" onClick={() => navigate("/projects")}>
          Back to Projects
        </button>

        <div className="project-hero-layout">
          <div>
            <p className="project-kicker">Case Study 02</p>
            <h1>Shoot and Edit Cloud Studio</h1>
            <div className="project-chip-row">
              <span className="project-chip">PHP</span>
              <span className="project-chip">MySQL</span>
              <span className="project-chip">Creative Platform</span>
            </div>
            <p className="project-lead">
              Shoot and Edit Cloud Studio is a creative digital studio focused
              on delivering high-quality visual and audio content. We
              specialize in transforming raw ideas into engaging, polished
              media that helps brands and individuals stand out in digital
              spaces.
            </p>
          </div>

          <img src="/Studio.png" alt="Shoot and Edit Cloud Studio" className="project-img project-img-large"/>
        </div>

        <p className="project-paragraph">
          Our studio offers end-to-end solutions, from planning and shooting to
          professional editing, ensuring every project meets modern creative and
          technical standards. With a strong eye for detail and storytelling,
          we aim to create content that is both visually appealing and
          impactful.
        </p>

        <p className="project-paragraph">
          The platform is built using PHP and a MySQL database, ensuring secure
          data handling, dynamic content management, and smooth backend
          performance.
        </p>

        <div className="studio-preview" aria-label="Shoot and Edit project preview gallery">
          <div className="studio-preview-track">
            {[...previewImages, ...previewImages].map((imagePath, index) => (
              <img
                key={`${imagePath}-${index}`}
                src={imagePath}
                alt={`Shoot and Edit preview ${index % previewImages.length + 1}`}
                className="studio-preview-image"
                loading="lazy"
              />
            ))}
          </div>
        </div>

              <div className="services-section project-feature-grid">
  <h2 className="section-title">Our Services</h2>

  <div className="services-list">
    <div className="service-item">
      <h3>Video Shooting & Editing</h3>
      <p>Cinematic edits, reels, short videos, and promotional content.</p>
    </div>

    <div className="service-item">
      <h3>Photo Editing & Retouching</h3>
      <p>Color correction, enhancements, and creative retouching.</p>
    </div>

    <div className="service-item">
      <h3>Audio Editing & Sound Design</h3>
      <p>Clean audio, background music, and professional sound effects.</p>
    </div>

    <div className="service-item">
      <h3>Creative Content Production</h3>
      <p>Social media content, digital media assets, and branding visuals.</p>
    </div>
  </div>

  <p className="services-footer">
    At <strong>Shoot & Edit Cloud Studio</strong>, creativity meets technology. 
    We believe in quality, consistency, and innovation—delivering content that 
    connects with audiences and elevates your digital presence.
  </p>
</div>

              
            </section>
    </div>
  );
}

