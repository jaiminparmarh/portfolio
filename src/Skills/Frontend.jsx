export default function Frontend() {
  return (
    <div>
      <section className="section">
    <h2>Frontend Development</h2>
    <p>
      I have strong foundational knowledge of frontend technologies used to
      build responsive and user-friendly web interfaces.
    </p>
    <ul>
      <li><strong>HTML</strong>  Structure and semantic web content</li>
      <li><strong>CSS</strong>  Styling, layouts, animations, responsiveness</li>
      <li><strong>JavaScript</strong>  Logic, DOM manipulation, interactivity</li>
    </ul>
      {location.pathname === "/skills/frontend" && (
          <>
    <p class="skills-intro">
      I have strong foundational and practical knowledge of frontend technologies,
      focused on building responsive, accessible, and user-friendly web interfaces.
    </p>

    {/* <!-- HTML Skills --> */}
    <div class="skill-block">
      <h3>HTML & Semantic Structure</h3>
      <ul>
        <li>Writing clean, well-structured HTML using semantic elements 
            (<code>header</code>, <code>section</code>, <code>article</code>, 
            <code>nav</code>, <code>footer</code>)</li>
        <li>Creating SEO-friendly and accessible markup</li>
        <li>Structuring content for scalability and maintainability</li>
        <li>Proper use of forms, inputs, and media elements</li>
      </ul>
    </div>

    {/* <!-- CSS Skills --> */}
    <div class="skill-block">
      <h3>CSS Styling & Responsive Design</h3>
      <ul>
        <li>Styling layouts using Flexbox and CSS Grid</li>
        <li>Building fully responsive designs for desktop, tablet, and mobile devices</li>
        <li>Implementing smooth animations and transitions</li>
        <li>Creating reusable and maintainable CSS structures</li>
        <li>Experience with modern UI practices such as spacing, typography, and color systems</li>
      </ul>
    </div>

    {/* <!-- JavaScript Skills --> */}
    <div class="skill-block">
      <h3>JavaScript & Interactivity</h3>
      <ul>
        <li>Writing clean and readable JavaScript (ES6+)</li>
        <li>DOM manipulation for dynamic content updates</li>
        <li>Handling user events and user interactions</li>
        <li>Form validation and basic client-side logic</li>
        <li>Improving user experience through interactive components</li>
      </ul>
    </div>

    {/* <!-- UI/UX Awareness --> */}
    <div class="skill-block">
      <h3>UI/UX Awareness</h3>
      <ul>
        <li>Understanding of user-centered design principles</li>
        <li>Strong focus on clarity, consistency, and usability</li>
        <li>Attention to visual hierarchy and smooth user flow</li>
      </ul>
    </div>
          </>
        )}

        </section>
  
    </div>
    
  );
}

