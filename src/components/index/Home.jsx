import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
  const data={text:"With 5 years of dedicated study in Computer Science, I have expertise across diverse IT domains, including software development, front-end web systems, IoT applications, and database management. I have refined a strong aptitude for independent learning and practical problem-solving through academic projects and self-driven initiatives. I am now eager to apply these skills to innovation and deliver value within  IT organizations."}
  return (
    <>
  <section id="home"className='home '>
    <div className='main-banner'>
          <div className='heading'>
            <h1>Hey there, I am Kevin Ko </h1>
              <p>Passionate and Driven <br></br>Year 3 CPEG student at the  HKUST</p>
          </div>
      </div>
  </section>
      </>
  )}

export default Home;