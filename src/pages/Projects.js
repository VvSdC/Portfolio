import React, { useEffect } from "react";
import Header from "../components/Header";
import { FaLaptopCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectsdata from "./projectsdata";
import { Link } from "react-router-dom";
import AOS from "aos";
import "../stylesheets/projects.css";

function Projects() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="projects-page">
      <Header />

      <section className="projects-hero">
        <div className="container">
          <div
            className="projects-hero-card"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="projects-hero-bg-shape" aria-hidden="true" />
            <div className="row align-items-center g-4">
              <div className="col-lg-7 projects-hero-content">
                <span className="projects-hero-eyebrow">
                  <FaLaptopCode className="me-2" />
                  Portfolio Work
                </span>
                <h1 className="font-bold projects-hero-title">Projects</h1>
                <p className="projects-hero-text">
                  Production-oriented builds spanning agentic e-commerce, AI safety
                  gateways, and responsible AI systems — designed for real-world
                  scale and security.
                </p>
                <div className="projects-hero-tags">
                  <span>Full Stack</span>
                  <span>Agentic AI</span>
                  <span>AI Guardrails</span>
                  <span>Cloud Deployed</span>
                </div>
                <a href="#projectsList" className="projects-hero-cta">
                  View Projects
                </a>
              </div>

              <div
                className="col-lg-5 projects-hero-visual"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <div className="projects-hero-orbit">
                  <div className="projects-hero-ring" aria-hidden="true" />
                  <div className="projects-hero-ring-inner">
                    <FaLaptopCode className="projects-hero-icon" />
                  </div>
                  <span className="projects-hero-stat projects-hero-stat-top">
                    2 Featured Builds
                  </span>
                  <span className="projects-hero-stat projects-hero-stat-bottom">
                    Open Source & Live Demo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container projects-list" id="projectsList">
        <div className="projects-section-header" data-aos="fade-up">
          <span className="projects-section-icon">
            <FaGithub />
          </span>
          <h3 className="font-bold">Featured Projects</h3>
          <span className="projects-section-line" aria-hidden="true" />
        </div>

        <div className="row g-4">
          {projectsdata.map((project, index) => (
            <div
              key={project.title}
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <article className="project-card">
                <div className="project-card-accent" aria-hidden="true" />
                <div className="project-card-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-card-body">
                  <h3 className="font-bold project-card-title">
                    {project.title}
                  </h3>
                  <p className="project-card-summary">{project.summary}</p>
                  <ul className="project-card-highlights">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="project-card-tech">
                    {project.tech.map((tag) => (
                      <span key={tag} className="project-tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card-cta"
                  >
                    View Project
                    <FaExternalLinkAlt className="ms-2" />
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
