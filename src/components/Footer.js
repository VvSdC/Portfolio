import React from "react";
import { FaLinkedin, FaMailBulk, FaGithub, FaRobot, FaMapMarkerAlt } from "react-icons/fa";
import { CONTACT_EMAIL, MAILTO_LINK, LINKEDIN_URL } from "../constants/contact";

const socialLinks = [
  {
    label: "LinkedIn",
    href: LINKEDIN_URL,
    icon: FaLinkedin,
  },
  { label: "Email", href: MAILTO_LINK, icon: FaMailBulk },
  { label: "GitHub", href: "https://github.com/VvSdC", icon: FaGithub },
  {
    label: "Hugging Face",
    href: "https://huggingface.co/vvsd-charan",
    icon: FaRobot,
  },
];

function Footer() {
  return (
    <footer className="footer">
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        aria-hidden="true"
      >
        <path
          fill="black"
          fillOpacity="1"
          d="M0,128L48,154.7C96,181,192,235,288,250.7C384,267,480,245,576,213.3C672,181,768,139,864,144C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      <div className="footer-content">
        <div className="container footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <p className="footer-name font-bold">VVSD Charan</p>
              <p className="footer-role">Responsible AI Engineer</p>
              <p className="footer-tagline">
                LLM safety · Agentic AI · Full Stack
              </p>
            </div>

            <div className="footer-connect">
              <p className="footer-heading">Connect With Me</p>
              <div className="footer-social">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="footer-social-link"
                      aria-label={link.label}
                      title={link.label}
                    >
                      <Icon className="footer-icons" />
                    </a>
                  );
                })}
              </div>
              <a href={MAILTO_LINK} className="footer-email">
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="footer-location-block">
              <p className="footer-heading">Location & Site</p>
              <p className="footer-location">
                <FaMapMarkerAlt className="footer-location-icon" />
                Hyderabad, India
              </p>
              <a
                href="https://vvsd-charan.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="footer-site-link"
              >
                vvsd-charan.netlify.app
              </a>
            </div>
          </div>

          <hr className="footer-divider" />

          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Vummethala Venkata Sri Datta Charan
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
