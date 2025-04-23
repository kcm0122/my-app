import React from "react";
import {Link} from "react-router-dom";

function MySkill() {
    const data=[{cover:"icon1.png" ,title:"Software Development" ,desc: "Possess the skills and experience to develop software, with a strong familiarity in Java, Python, and C++. "},
        {cover:"icon2.png" ,title:"Web Development" ,desc: "Experienced in website design (HTML, CSS, and JavaScript), capable of using React.js to develop front-end websites."},
        {cover:"icon3.png" ,title:"Word Processing" ,desc: "Experienced in MS Word, Excel, and PowerPoint, with a strong ability to complete paperwork with precision."}
        ,{cover:"icon4.png" ,title:"Utilize AI Tool" ,desc: "Knowledgeable in AI concepts and skilled in utilizing AI prompts and tools to enhance work efficiency."}
        ,{cover:"icon5.png", title:"Presentation/Communicate Skills",desc:"Fluent in English, Cantonese, and Putonghua, with the ability to actively listen to users' needs."}
    ,{cover:"icon6.png", title:"Problem Solving",desc:"Possess the ability to solve problems independently and demonstrate strong self-learning skills."}
    ]
    
    return (
    <>
    <section id="skill" className='project skill topMargin '>
    <div className='container flex'>
        <div className='left'>
            <div className='heading '><h1>Skill</h1></div>
        </div>
    </div>
     <div className='container grid-s '>
        {data.map((val)=>{
            return(
            <div className='services-inner-box'>
                <div className='imgg'><img src={val.cover} alt=''/></div>
                 <h2>{val.title}</h2>
                 <p>{val.desc}</p>
            </div>
        
    )})}
    </div>   
    </section>
    </>
    )}

export default MySkill;