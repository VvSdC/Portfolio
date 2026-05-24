import React, { useEffect } from "react";
import Header from "../components/Header.js";
import { FaTools, FaLayerGroup } from "react-icons/fa";
import AOS from "aos";
import skillsdata from "./skillsdata.js";
import "../stylesheets/skills.css";

function Courses() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="skills-page">
      <Header />

      <section className="skills-hero">
        <div className="container">
          <div
            className="skills-hero-card"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="skills-hero-bg-shape" aria-hidden="true" />
            <div className="row align-items-center g-4">
              <div className="col-lg-7 skills-hero-content">
                <span className="skills-hero-eyebrow">
                  <FaTools className="me-2" />
                  Technical Expertise
                </span>
                <h1 className="font-bold skills-hero-title">Skills</h1>
                <p className="skills-hero-text">
                  Responsible AI Engineer and Generative AI Specialist with enterprise
                  experience in LLM safety, alignment frameworks, MCP guardrails, SFT
                  on distributed GPU clusters, and agentic workflows mapped to security
                  and privacy requirements.
                </p>
                <div className="skills-hero-tags">
                  <span>Responsible AI</span>
                  <span>Generative AI</span>
                  <span>Machine Learning</span>
                  <span>Full Stack</span>
                </div>
                <a href="#skillsList" className="skills-hero-cta">
                  Explore Skills
                </a>
              </div>

              <div
                className="col-lg-5 skills-hero-visual"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <div className="skills-hero-orbit">
                  <div className="skills-hero-ring" aria-hidden="true" />
                  <div className="skills-hero-ring-inner">
                    <FaLayerGroup className="skills-hero-icon" />
                  </div>
                  <span className="skills-hero-stat skills-hero-stat-single">
                    {skillsdata.length} Skill Domains
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container skills-list" id="skillsList">
        <div className="skills-section-header" data-aos="fade-up">
          <span className="skills-section-icon">
            <FaLayerGroup />
          </span>
          <h3 className="font-bold">Technical Skills</h3>
          <span className="skills-section-line" aria-hidden="true" />
        </div>
        <p className="skills-section-subtitle" data-aos="fade-up">
          Organized by domain — aligned with my current resume.
        </p>

        <div className="row g-4">
          {skillsdata.map((group, index) => (
            <div
              key={group.category}
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <article className="skill-category-card">
                <div className="skill-card-accent" aria-hidden="true" />
                <div className="skill-card-header">
                  <div className="skill-card-icon-wrap">
                    <img
                      src={group.image}
                      alt=""
                      aria-hidden="true"
                      className="skill-card-icon"
                    />
                  </div>
                  <div className="skill-card-title-wrap">
                    <h4 className="font-bold skill-card-title">
                      {group.category}
                    </h4>
                    <span className="skill-count-badge">
                      {group.skills.length} skills
                    </span>
                  </div>
                </div>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
