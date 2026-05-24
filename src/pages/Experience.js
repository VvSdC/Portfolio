import React, { useEffect } from "react";
import Header from "../components/Header";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaMapMarkerAlt,
} from "react-icons/fa";
import AOS from "aos";
import experiencedata from "./experiencedata";
import "../stylesheets/experience.css";

function Experience() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="experience-page">
      <Header />

      <section className="experience-hero">
        <div className="container">
          <div
            className="experience-hero-card"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="experience-hero-bg-shape" aria-hidden="true" />
            <div className="row align-items-center g-4">
              <div className="col-lg-7 experience-hero-content">
                <span className="experience-hero-eyebrow">
                  <FaBriefcase className="me-2" />
                  Career Journey
                </span>
                <h1 className="font-bold experience-hero-title">Experience</h1>
                <p className="experience-hero-text">
                  Responsible AI Engineer with 1+ years of enterprise production
                  experience building LLM safety systems, alignment frameworks, and
                  automated multi-agent workflows.
                </p>
                <div className="experience-hero-tags">
                  <span>Responsible AI</span>
                  <span>LLM Guardrails</span>
                  <span>Agentic AI</span>
                  <span>SFT & Alignment</span>
                </div>
                <a href="#experienceList" className="experience-hero-cta">
                  View Details
                </a>
              </div>

              <div
                className="col-lg-5 experience-hero-visual"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <div className="experience-hero-orbit">
                  <div className="experience-hero-ring" aria-hidden="true" />
                  <div className="experience-hero-ring-inner">
                    <FaBriefcase className="experience-intro-icon" />
                  </div>
                  <span className="experience-hero-stat experience-hero-stat-top">
                    Infosys · 2024 – Present
                  </span>
                  <span className="experience-hero-stat experience-hero-stat-bottom">
                    3 Certifications
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container experience-list" id="experienceList">
        <section className="experience-section" data-aos="fade-up">
          <div className="experience-section-header">
            <span className="experience-section-icon">
              <FaBriefcase />
            </span>
            <h3 className="font-bold">Professional Experience</h3>
            <span className="experience-section-line" aria-hidden="true" />
          </div>

          <div className="experience-timeline">
            {experiencedata.work.map((job, jobIndex) => (
              <article
                key={job.company}
                className="experience-card experience-job-card"
                data-aos="fade-up"
                data-aos-delay={jobIndex * 100}
              >
                <div className="experience-card-accent" aria-hidden="true" />
                <div className="d-flex flex-wrap justify-content-between align-items-start gap-3">
                  <div>
                    <h4 className="font-bold mb-1 experience-company">
                      {job.company}
                    </h4>
                    <p className="mb-0 font-bold experience-role">{job.role}</p>
                    <p className="experience-subtitle mb-0">{job.subtitle}</p>
                  </div>
                  <div className="text-end">
                    <span className="experience-badge">{job.period}</span>
                    <p className="experience-location mb-0 mt-2">
                      <FaMapMarkerAlt className="me-1" />
                      {job.location}
                    </p>
                  </div>
                </div>

                {job.sections.map((section, sectionIndex) => (
                  <div
                    key={section.title}
                    className="experience-subsection"
                    data-aos="fade-up"
                    data-aos-delay={150 + sectionIndex * 80}
                  >
                    <h5 className="font-bold experience-subsection-title">
                      {section.title}
                    </h5>
                    <ul className="experience-highlights">
                      {section.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section
          className="experience-section"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="experience-section-header">
            <span className="experience-section-icon">
              <FaGraduationCap />
            </span>
            <h3 className="font-bold">Education</h3>
            <span className="experience-section-line" aria-hidden="true" />
          </div>

          <div className="experience-timeline experience-timeline-edu">
            {experiencedata.education.map((edu, index) => (
              <article
                key={edu.institution}
                className="experience-card experience-edu-card"
                data-aos="zoom-in"
                data-aos-delay={index * 120}
              >
                <div className="experience-edu-icon" aria-hidden="true">
                  <FaGraduationCap />
                </div>
                <div className="experience-edu-body">
                  <div className="d-flex flex-wrap justify-content-between gap-2">
                    <div>
                      <h4 className="font-bold mb-1">{edu.institution}</h4>
                      <p className="mb-0 experience-degree">{edu.degree}</p>
                      <p className="experience-detail mb-0">{edu.details}</p>
                    </div>
                    <span className="experience-badge">{edu.period}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="experience-section"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="experience-section-header">
            <span className="experience-section-icon">
              <FaCertificate />
            </span>
            <h3 className="font-bold">Certifications</h3>
            <span className="experience-section-line" aria-hidden="true" />
          </div>

          <div className="row cert-grid">
            {experiencedata.certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="col-md-4 mb-4"
                data-aos="flip-left"
                data-aos-delay={index * 100}
              >
                <div className="cert-card h-100">
                  <div className="cert-card-glow" aria-hidden="true" />
                  <FaCertificate className="cert-card-icon" />
                  <h5 className="font-bold cert-card-title">{cert.name}</h5>
                  <p className="cert-card-issuer mb-0">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Experience;
