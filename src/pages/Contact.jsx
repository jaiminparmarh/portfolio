import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import axios from "axios";
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

// Auto hide after 3 seconds
setTimeout(() => {
  setShowSuccess(false);
}, 2000);

} catch (error) {
  alert("Something went wrong 😢");
}

    setLoading(false);
  };

  return (
    <section className="section">
      <h2 className="center" style={{marginTop:"-20px"}}>🤝 Work Together</h2>
      <p className="center">Let’s build something awesome!</p>
      <center>
      <AnimatePresence>
  {showSuccess && (
    <motion.div
      className="success"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      Message Sent Successfully ✅
    </motion.div>
  )}
</AnimatePresence>

      </center>
      <form onSubmit={handleSubmit}>
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

        <button className="button-contact" disabled={loading}>
          {loading ? "Sending..." : "Send Message 🚀"}
        </button>
      </form>

      <div className="social-icons center" style={{marginTop:"20px", marginBottom:"-30px"}}>
                <a href="https://github.com/jaiminparmarh"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/jaiminparmarh/"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jaiminparmar3110@gmail.com"><i className="fas fa-envelope"></i></a>
            </div>
      
    </section>
  );
}