import React, { useState } from "react";

const LanguageChart = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", value: 80 },
        { name: "CSS", value: 85 },
        { name: "React JS", value: 60 },
        { name: "JavaScript", value: 55 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Git & GitHub", value: 70 },
        { name: "VB.NET", value: 60 },
        { name: "MySQL Server", value: 60 },
        { name: "PHP", value: 55 },
        { name: "Node JS", value: 10 },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "VS Code", value: 85 },
        { name: "Visual Studio", value: 80 },
        { name: "GitHub", value: 75 },
        { name: "SQL Server", value: 60 },
      ],
    },
    {
      category: "Creative Skills",
      skills: [
        { name: "Video Editing", value: 85 },
        { name: "graphic design", value: 85 },
        { name: "Photo Editing", value: 85 },
        { name: "Audio Editing", value: 70 },
      ],
    },
  ];

  // Active state
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <div className="chart-container">
      {/* Buttons */}
      <div className="btn-group">
        {skillsData.map((item) => (
          <button
            key={item.category}
            className={`btn ${
              activeCategory === item.category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(item.category)}
          >
            {item.category}
          </button>
        ))}
      </div>

      {/*Skills*/}
      <div className="skills-container">
        {skillsData
          .filter((group) => group.category === activeCategory)
          .map((group) => (
            <div key={group.category} className="skill-group">
              {/* <h2 className="category-title">{group.category}</h2> */}

              <div className="bar-list">
                {group.skills.map((item, idx) => (
                  <div key={idx} className="bar-row">
                    <div className="label">{item.name}</div>

                    <div className="bar-wrapper">
                      <div
                        className="bar-fill"
                        style={{ width: `${item.value}%` }}>
                      </div>

                      <span className="value-text">
                        {item.value}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LanguageChart;