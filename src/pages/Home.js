import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import ResumeModal from '../components/ResumeModal';
import { Link } from 'react-router-dom';
import { FaUser, FaFilePdf, FaEye } from 'react-icons/fa';
import AOS from 'aos';

const summaryPillars = [
  {
    title: 'Responsible AI & Safety',
    items: [
      'AI Guardrails',
      'Prompt Injection Defense',
      'PII Masking & Redaction',
      'Red Teaming',
      'OWASP LLM Top 10',
      'MCP Boundary Proxies',
    ],
  },
  {
    title: 'Alignment & Agentic AI',
    items: [
      'Supervised Fine-Tuning (SFT)',
      'Unsloth & SLM Optimization',
      'LangChain & LangGraph',
      'vLLM & Synthetic Data',
      'Agentic Workflows',
      'RAG',
    ],
  },
  {
    title: 'Engineering & Stack',
    items: [
      'Python & PyTorch',
      'React.js & Node.js',
      'REST & JSON-RPC',
      'MongoDB',
      'GCP Cloud Run & Docker',
      'Slurm GPU Clusters',
    ],
  },
];

function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    AOS.refresh();
  }, []);

  const openResume = () => setResumeOpen(true);
  const closeResume = () => setResumeOpen(false);

  return (
    <div className="home-page">
      <ResumeModal isOpen={resumeOpen} onClose={closeResume} />

      <Header />

      <div className='introduction flex-with-center' style={{ backgroundColor: 'black' }}>
        <div>
          <svg className='animated-svg' viewBox="0 0 960 300">
            <symbol id="s-text">
              <text textAnchor="middle" x="50%" y="80%">VVSD Charan</text>
            </symbol>
            <g className="g-ants">
              <use xlinkHref="#s-text" className="text-copy" />
              <use xlinkHref="#s-text" className="text-copy" />
              <use xlinkHref="#s-text" className="text-copy" />
              <use xlinkHref="#s-text" className="text-copy" />
              <use xlinkHref="#s-text" className="text-copy" />
            </g>
          </svg>

          <div className='intro-content d-flex' style={{ justifyContent: 'space-evenly' }}>
            <div className='animated-description'>
              I am a
              <div className="dropping-texts">
                <div>Responsible AI Engineer</div>
                <div>Generative AI Specialist</div>
                <div>AI Safety Engineer</div>
                <div>Agentic AI Builder</div>
              </div>
            </div>
            <button
              type="button"
              onClick={openResume}
              className='primary-button font-bold home-resume-btn'
            >
              My Resume
            </button>
          </div>

          <div className="snowflakes" aria-hidden="true">
            <div className="snowflake">❅</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❄</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❄</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❄</div>
          </div>
        </div>
      </div>

      <Carousel />

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fill-opacity="1" d="M0,256L21.8,229.3C43.6,203,87,149,131,133.3C174.5,117,218,139,262,170.7C305.5,203,349,245,393,240C436.4,235,480,181,524,186.7C567.3,192,611,256,655,245.3C698.2,235,742,149,785,144C829.1,139,873,213,916,256C960,299,1004,309,1047,304C1090.9,299,1135,277,1178,229.3C1221.8,181,1265,107,1309,106.7C1352.7,107,1396,181,1418,218.7L1440,256L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg>
      </div>

      <section className="home-content-section">
        <div className="container">
          <div
            className="home-summary-card"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="home-summary-bg-shape" aria-hidden="true" />

            <div className="home-section-header">
              <span className="home-section-icon">
                <FaUser />
              </span>
              <h2 className="font-bold">Professional Summary</h2>
              <span className="home-section-line" aria-hidden="true" />
            </div>

            <p className="home-summary-text">
              Responsible AI Engineer and Generative AI Specialist with 1+ years of enterprise
              production experience building robust LLM safety systems, alignment frameworks, and
              automated multi-agent workflows. Proven track record in synthetic data pipelines,
              Supervised Fine-Tuning (SFT) on distributed GPU environments, real-time interception
              proxies, and Model Context Protocol (MCP) implementations mapped to organizational
              and security guardrails.
            </p>

            <div className="row g-4 mt-2">
              {summaryPillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <article className="home-pillar-card">
                    <div className="home-pillar-accent" aria-hidden="true" />
                    <h4 className="font-bold home-pillar-title">{pillar.title}</h4>
                    <ul className="home-pillar-list">
                      {pillar.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </div>
              ))}
            </div>

            <div className="home-cta-buttons">
              <Link to="/experience" className="home-cta-link">
                View Experience
              </Link>
              <Link to="/skills" className="home-cta-link">
                All Skills
              </Link>
            </div>
          </div>

          <div
            className="home-resume-card"
            id="resume"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="home-resume-card-inner">
              <div className="home-resume-icon-wrap" aria-hidden="true">
                <FaFilePdf />
              </div>
              <div>
                <h2 className="font-bold home-resume-heading">Resume</h2>
                <p className="home-resume-note mb-0">
                  View my latest resume — Responsible AI, Generative AI, and full-stack work.
                </p>
              </div>
              <button
                type="button"
                onClick={openResume}
                className="home-cta-link home-resume-view-btn"
              >
                <FaEye className="me-2" />
                View Resume
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
