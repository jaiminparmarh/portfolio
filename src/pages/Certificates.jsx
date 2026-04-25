import { useEffect, useState } from "react";

const certificates = [
  {
    title: "Internship Offer Letter",
    issuer: "Hex Softwares",
    description: "Web Development Intern, Remote",
    date: "April 2026",
    image: "/certificate/Internship Offer Letter.jpg",
  },
  {
    title: "Internship Completion Certificate",
    issuer: "BIT Infotech",
    description: "Full Stack Development - ReactJS, NodeJS",
    date: "2026",
    image: "/certificate/Internship Completion Certificate.jpeg",
  },
  {
    title: "Internship Confirmation Certificate",
    issuer: "BIT Infotech",
    description: "Web Development & API Integration",
    date: "April - Dec 2025",
    image: "/certificate/Internship Confirmation Certificate.jpeg",
  },
  {
    title: "Certificate of Appreciation",
    issuer: "Tech-Fest, Sardar Patel University",
    description: "Volunteer, Teamwork Recognition",
    date: "Feb 2025",
    image: "/certificate/Certificate of Appreciation.jpg",
  },
  {
    title: "Certificate of Participation",
    issuer: "VYOM 2025, SVIT Vasad",
    description: "Android App Development & Data Visualization",
    date: "Feb 2025",
    image: "/certificate/Certificate of Participation VYOM 2025.jpg",
  },
  {
    title: "Certificate of Participation",
    issuer: "Sharadotsav 2024, Sardar Patel University",
    description: "Volunteer Member",
    date: "Oct 2024",
    image: "/certificate/Certificate of Participation  Sharadotsav.jpg",
  },
];

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    if (!selectedCertificate) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedCertificate]);

  const handleCardKeyDown = (event, certificate) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedCertificate(certificate);
    }
  };

  return (
    <>
      <section className="section certificates-page">
        <div className="projects-showcase-header">
          <p className="project-kicker">Achievements</p>
          <h1>Certificates</h1>
          <p>
            Verified certificates from internships, technical participation, and
            volunteer activities.
          </p>
        </div>

        <div className="projects-grid">
          {certificates.map((certificate) => (
            <article
              key={`${certificate.title}-${certificate.issuer}`}
              className="project-card certificate-card"
              onClick={() => setSelectedCertificate(certificate)}
              onKeyDown={(event) => handleCardKeyDown(event, certificate)}
              role="button"
              tabIndex={0}
              aria-label={`Open full preview for ${certificate.title}`}
            >
              <img
                src={certificate.image}
                alt={`${certificate.title} - ${certificate.issuer}`}
                className="certificate-image"
                loading="lazy"
              />

              <div className="project-chip-row">
                <span className="project-chip">{certificate.date}</span>
                <span className="project-chip">{certificate.issuer}</span>
              </div>

              <h2>{certificate.title}</h2>
              <p>{certificate.description}</p>
            </article>
          ))}
        </div>
      </section>

      {selectedCertificate && (
        <div
          className="certificate-preview-overlay"
          onClick={() => setSelectedCertificate(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCertificate.title} full preview`}
        >
          <div
            className="certificate-preview-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="certificate-close-btn"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close full preview"
            >
              Close
            </button>
            <img
              src={selectedCertificate.image}
              alt={`${selectedCertificate.title} - ${selectedCertificate.issuer}`}
              className="certificate-preview-image"
            />
          </div>
        </div>
      )}
    </>
  );
}
