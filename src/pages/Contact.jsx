import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import "./ContactForm.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_36ihoxa",
        "template_p8kq2ft",
        formData,
        "qdTqyibX3Hrsn1e4u"
      );

      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="section contact-page">
      <div className="contact-shell">
        <div className="contact-intro">
          <p className="contact-eyebrow">Let&apos;s connect</p>
          <h2>Build Something Bold Together</h2>
          <p>
            Have an idea, freelance role, or internship or Job opportunity? Share the
            details and I&apos;ll get back quickly.
          </p>

          <div className="contact-chips" aria-label="Contact highlights">
            <span>Fast replies</span>
            <span>Open to projects</span>
            <span>Remote friendly</span>
          </div>
        </div>

        <div className="contact-card">
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                className="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                Message sent successfully.
              </motion.div>
            )}
          </AnimatePresence>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="button-contact" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <div className="social-icons contact-socials" aria-label="Social links">
        <a href="https://github.com/jaiminparmarh" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jaiminparmarh/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="mailto:jaiminparmar3110@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
}