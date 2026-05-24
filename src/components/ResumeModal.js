import React, { useEffect } from "react";
import { FaTimes, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { RESUME_PATH } from "../constants/resume";

function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="resume-modal-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="resume-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="resume-modal-header">
          <h3 id="resume-modal-title" className="font-bold mb-0">
            Vummethala_Charan_Resume.pdf
          </h3>
          <button
            type="button"
            className="resume-modal-close"
            onClick={onClose}
            aria-label="Close resume"
          >
            <FaTimes />
          </button>
        </div>

        <iframe
          title="Vummethala Charan Resume"
          src={RESUME_PATH}
          className="resume-modal-iframe"
        />

        <div className="resume-modal-footer">
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noreferrer"
            className="home-cta-link home-cta-link-sm"
          >
            <FaExternalLinkAlt className="me-2" />
            Open in New Tab
          </a>
          <a
            href={RESUME_PATH}
            download="Vummethala_Charan_Resume.pdf"
            className="home-cta-link home-cta-link-outline home-cta-link-sm"
          >
            <FaDownload className="me-2" />
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResumeModal;
