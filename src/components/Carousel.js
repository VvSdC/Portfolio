import React from "react";

const technologies = [
  { name: "Python", image: "./python.svg" },
  { name: "PyTorch", image: "./pytorch.svg" },
  { name: "Scikit-learn", image: "./scikit-learn.svg" },
  { name: "OpenAI / LLMs", image: "./openai.svg" },
  { name: "Machine Learning", image: "./ml.svg" },
  { name: "Deep Learning", image: "./deep-learning.svg" },
  { name: "Responsible AI", image: "./responsible-ai.svg" },
  { name: "Generative AI", image: "./ai.svg" },
  { name: "NLP", image: "./nlp.svg" },
  { name: "Supervised Fine-Tuning", image: "./fine-tuning.svg" },
  { name: "MCP", image: "./mcp.svg" },
  { name: "Agentic AI", image: "./ai-agents.svg" },
];

function Carousel() {
  const angleStep = 360 / technologies.length;

  return (
    <div>
      <div className="carousel-parent position-relative">
        <header className="carousel-header">
          <h1 className="animated-tech">Technologies I use</h1>
          <p className="carousel-subtitle">
            Responsible AI · Generative AI · Machine Learning
          </p>
        </header>

        <div className="gallery">
          {technologies.map((tech, index) => (
            <span
              key={tech.name}
              className="tech-carousel-item"
              style={{ "--i": index + 1, "--step": `${angleStep}deg` }}
              title={tech.name}
            >
              <img src={tech.image} alt="" aria-hidden="true" />
              <span className="tech-label">{tech.name}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
