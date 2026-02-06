import WeatherApi from "./WeatherApi";


const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Jaimin Parmar</p>
      <WeatherApi/>
      <div className="footer-links">
        <a href="https://github.com/jaiminparmarh" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/jaiminparmarh/" target="_blank">LinkedIn</a>
        
      </div>
    </footer>
  );
};

export default Footer;