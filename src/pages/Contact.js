import React, { useEffect } from "react";
import Header from "../components/Header";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaRobot,
} from "react-icons/fa";
import AOS from "aos";
import { CONTACT_EMAIL, MAILTO_LINK } from "../constants/contact";
import "../stylesheets/contact.css";

const contactLinks = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: MAILTO_LINK,
    icon: FaEnvelope,
  },
  {
    label: "Location",
    value: "Hyderabad, India",
    href: null,
    icon: FaMapMarkerAlt,
  },
  {
    label: "LinkedIn",
    value: "vummethala-venkata-sri-datta-charan",
    href: "https://www.linkedin.com/in/vummethala-venkata-sri-datta-charan",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "VvSdC",
    href: "https://github.com/VvSdC",
    icon: FaGithub,
  },
  {
    label: "Hugging Face",
    value: "vvsd-charan",
    href: "https://huggingface.co/vvsd-charan",
    icon: FaRobot,
  },
];

function Contact() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const handleSubmit = () => {
    window.setTimeout(() => window.location.reload(), 300);
  };

  return (
    <div className="contact-page">
      <Header />

      <section className="contact-hero">
        <div className="container">
          <div
            className="contact-hero-card"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="contact-hero-bg-shape" aria-hidden="true" />
            <div className="row align-items-center g-4">
              <div className="col-lg-7 contact-hero-content">
                <span className="contact-hero-eyebrow">
                  <FaEnvelope className="me-2" />
                  Get In Touch
                </span>
                <h1 className="font-bold contact-hero-title">Contact</h1>
                <p className="contact-hero-text">
                  Open to collaborations on Responsible AI, LLM safety, agentic
                  systems, and full-stack engineering. Send a message or reach out
                  directly through any channel below.
                </p>
                <div className="contact-hero-tags">
                  <span>Responsible AI</span>
                  <span>Collaboration</span>
                  <span>Opportunities</span>
                </div>
                <a href="#contactForm" className="contact-hero-cta">
                  Send a Message
                </a>
              </div>

              <div
                className="col-lg-5 contact-hero-visual"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <div className="contact-hero-orbit">
                  <div className="contact-hero-ring" aria-hidden="true" />
                  <div className="contact-hero-ring-inner">
                    <FaPaperPlane className="contact-hero-icon" />
                  </div>
                  <span className="contact-hero-stat contact-hero-stat-single">
                    Hyderabad, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container contact-content">
        <div className="contact-section-header" data-aos="fade-up">
          <span className="contact-section-icon">
            <FaEnvelope />
          </span>
          <h3 className="font-bold">Contact Details</h3>
          <span className="contact-section-line" aria-hidden="true" />
        </div>

        <div className="row g-4">
          <div className="col-lg-5" data-aos="fade-right">
            <div className="contact-info-card">
              <div className="contact-info-accent" aria-hidden="true" />
              <h4 className="font-bold contact-info-heading">
                Let&apos;s connect
              </h4>
              <p className="contact-info-text">
                Prefer email or a direct link? Use any option below — I typically
                respond within 1–2 business days.
              </p>
              <ul className="contact-info-list">
                {contactLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label} className="contact-info-item">
                      <span className="contact-info-item-icon">
                        <Icon />
                      </span>
                      <div>
                        <span className="contact-info-label">{item.label}</span>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            className="contact-info-value"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="contact-info-value">{item.value}</span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left" id="contactForm">
            <div className="contact-form-card">
              <div className="contact-form-accent" aria-hidden="true" />
              <h4 className="font-bold contact-form-heading">Send a message</h4>
              <p className="contact-form-subtext">
                Fill out the form and your email client will open with the message
                ready to send.
              </p>
              <form
                className="contact-form"
                action={MAILTO_LINK}
                method="post"
                encType="text/plain"
                onSubmit={handleSubmit}
              >
                <div className="contact-field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    className="contact-input"
                    name="Name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    className="contact-input"
                    name="Email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    className="contact-input contact-textarea"
                    name="Description"
                    rows={5}
                    placeholder="How can I help you?"
                    required
                  />
                </div>
                <button type="submit" className="contact-submit-btn">
                  <FaPaperPlane className="me-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
