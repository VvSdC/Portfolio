import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>

      {/* Header part (toggle button)  */}
      <Header />

      {/* Name and tagline  */}
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
                <div>Responsible AI engineer</div>
                <div>Machine Learning engineer</div>
                <div>Generative AI professional</div>
                <div>Full Stack professional</div>
              </div>
            </div>
            <button className='primary-button font-bold'><Link to='https://drive.google.com/file/d/1m3QAKV2U_6jeGP3wQJ1d_y5Sx368iTea/view?usp=drive_link' target='_blank' style={{ textDecoration: "none", color: 'white', fontWeight: 'bold' }}>My Resume</Link></button>
          </div>

          <div class="snowflakes" aria-hidden="true">
            <div class="snowflake">
              ❅
            </div>
            <div class="snowflake">
              ❅
            </div>
            <div class="snowflake">
              ❆
            </div>
            <div class="snowflake">
              ❄
            </div>
            <div class="snowflake">
              ❅
            </div>
            <div class="snowflake">
              ❆
            </div>
            <div class="snowflake">
              ❄
            </div>
            <div class="snowflake">
              ❅
            </div>
            <div class="snowflake">
              ❆
            </div>
            <div class="snowflake">
              ❄
            </div>
          </div>
        </div>
      </div>

      {/* Skillsets carousel  */}
      <Carousel />

      {/* Waves  */}
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fill-opacity="1" d="M0,256L21.8,229.3C43.6,203,87,149,131,133.3C174.5,117,218,139,262,170.7C305.5,203,349,245,393,240C436.4,235,480,181,524,186.7C567.3,192,611,256,655,245.3C698.2,235,742,149,785,144C829.1,139,873,213,916,256C960,299,1004,309,1047,304C1090.9,299,1135,277,1178,229.3C1221.8,181,1265,107,1309,106.7C1352.7,107,1396,181,1418,218.7L1440,256L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg>
      </div>

      {/* Skills section  */}
      <div className='devstack container mt-5 n-box2 py-5 my-5'>

        <div className='text-center'>
          <h2 className='font-bold mb-5'>My Skill-sets</h2>
          <img src='./developer.svg' height='200px' width='200px' alt='developer' />
        </div>

        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='font-bold text-center'>
              <h4 className='font-bold'>Front-end</h4>
              <hr />
              <p></p>
              <p>JavaScript</p>
              <p>Next.JS</p>
              <p>React.JS</p>
              <p>Embedded JavaScript</p>
              <p>Redux</p>
              <p>CSS</p>
              <p>Bootstrap</p>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='font-bold text-center'>
              <h4 className='font-bold'>Back-end / Databases</h4>
              <hr />
              <p>Node.JS</p>
              <p>Express.JS</p>
              <p>PHP</p>
              <p>SQL</p>
              <p>MongoDB</p>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='font-bold text-center'>
              <h4 className='font-bold'>Other</h4>
              <hr />
              <p>C/C++</p>
              <p>Data Structures and Algorithms</p>
              <p>Object Oriented Programming Concepts</p>
              <p>DataBase Management System</p>
              <p>Operating System</p>
              <p>Computer networks</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
