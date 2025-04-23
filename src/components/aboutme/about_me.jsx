import React from "react";
import {Link} from "react-router-dom";

function About_me() {
    const text={
        text1:" I am a dedicated and motivated third-year CPEG student at the Hong Kong University of Science and Technology (HKUST), with a strong passion for programming, problem-solving, and innovative technologies. Staying attuned to the fast-evolving tech landscape is important to me; I actively follow emerging trends, particularly in AI, machine learning, and cloud computing, as I believe continuous learning is essential for thriving in this digital era. "
        ,text2:"My academic journey has enhanced my practical skills and deepened my interest in the IT field, especially in artificial intelligence applications and database systems. I am enthusiastic about pursuing a career in roles related to AI or database management in the future, where I can thoroughly explore their possibilities and make meaningful contributions.",

        }
    
    return (
        <>
          <section id="about" className='about '>
          <div className='container flex'>
            <div className='left'>
                <div className="heading">
                <h1>About Me</h1>
                    <p>{text.text1}</p>
                    <p>{text.text2}</p>
                    </div>
                    <button className="primary-btn"><Link to="../public/Kevin_KO_CV.pdf" target="_blank" download>Download CV</Link></button>
              </div>
              
            <div className='right'>
                <div className="img"><img src='./tempman.jpg' alt=''></img> </div>
            </div>          
          </div>
          </section>
        </>
        )}

export default About_me;