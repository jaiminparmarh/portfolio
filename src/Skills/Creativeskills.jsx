export default function backend() {
  return (
    <div>
      {/* Creative Skills */}
  <section className="section">
    <h2>Creative Skills</h2>
    <p>
      Along with technical skills, I also have creative abilities that help in
      content creation and digital media work.
    </p>
    <ul>
      <li>Video Editing</li>
      <li>Photo Editing</li>
      <li>Audio Editing</li>
    </ul>

    {location.pathname === "/skills/Creativeskills" && (
          <>
            <p class="section-description">
      Along with technical development skills, I also possess strong creative
      abilities that support content creation, digital branding, and multimedia
      production. These skills allow me to deliver visually engaging and
      high-quality digital content.
    </p>

    <div class="creative-skills-grid">

      {/* <!-- Video Editing --> */}
      <div class="creative-card">
        
        <h3> <i class="fa-solid fa-video creative-icon"></i> Video Editing</h3>
        <p>
          Experienced in editing professional-quality videos including cuts,
          transitions, color correction, subtitles, and basic motion effects.
          I focus on storytelling, smooth flow, and audience engagement.
        </p>
        <ul>
          <li>Cutting & trimming</li>
          <li>Transitions & effects</li>
          <li>Color correction & grading</li>
          <li>Subtitles & captions</li>
        </ul>
      </div>

      {/* <!-- Photo Editing --> */}
      <div class="creative-card">
        
        <h3><i class="fa-solid fa-image creative-icon"></i> Photo Editing</h3>
        <p>
          Skilled in enhancing images for digital platforms through professional
          retouching, color adjustments, and creative design techniques.
          Focused on visual clarity and brand consistency.
        </p>
        <ul>
          <li>Image retouching</li>
          <li>Color correction</li>
          <li>Background removal</li>
          <li>Thumbnail & banner design</li>
        </ul>
      </div>

      {/* <!-- Audio Editing --> */}
      <div class="creative-card">
        
        <h3><i class="fa-solid fa-headphones creative-icon"></i> Audio Editing</h3>
        <p>
          Capable of editing and enhancing audio for clear and professional sound
          quality. I work on noise reduction, volume balancing, and audio syncing
          for videos and podcasts.
        </p>
        <ul>
          <li>Noise reduction</li>
          <li>Audio cleanup</li>
          <li>Volume leveling</li>
          <li>Sound effects integration</li>
        </ul>
      </div>

    </div>
          </>
        )}

  </section>
    </div>
  );
}