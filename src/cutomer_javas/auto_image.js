import React from 'react';

function Project() {

 const data=[{cover:"p1.png" ,title:"Virtual Smart Home (Python)" ,desc: "Python-based control system utilizing OpenCV for computer vision and MediaPipe for audio/gesture recognition, enabling hands-free operation of smart furniture through real-time environmental inputs."},
    {cover:"p2.png" ,title:"Rocat Car with Light Sensor (Arduino)" ,desc: "Developed an autonomous robotic vehicle using Arduino,integrating infrared sensors to achieve precise navigation on a track within a simulated environment."},
    {cover:"p3.png" ,title:"E-Commerce Database System (MS Access)" ,desc: "Implemented online shopping database using MS Access, including product search and filtering, user registration and authentication, shopping cart, and real-time inventory tracking and updates."}
    ,{cover:"p4.png" ,title:"Imitation of Mobile App - Quizlet (JAVA)" ,desc: "Developed a Quizlet-inspired Android application using Android Studio, replicating core features, including user authentication, data persistence, and interactive quiz functionality etc."}
    ,{cover:"p5.jpg", title:"Chess Game (C++)",desc:"Develop a fully functional chess game using object-oriented programming. This includes creating a chessboard, determining victory conditions, removing chess pieces, and implementing other essential chess functionalities."}
,{}
]
    
 return (
    <>
    <section id="project" className='project '>
    <div className='container flex'>
        <div className='left'>
            <div className='heading '>
                <h1>Portfolio</h1>
                </div>
                <p> Partial list of noteworthy projects I've completed in the past.</p>
               <p>Access <a href='https://github.com/kcm0122/Past-Project'>My Github </a> for other project</p>
                
            </div>
     </div>
     <div className='container grid '>
        {data.map((val)=>{
    return(
        <div className='box'><div className='text'>
         <div className='imgg'><img src={val.cover} alt=''/></div>
            <h2>{val.title}</h2>
            <p>{val.desc}</p></div>
        </div>
    )})}
</div>   
</section>
</>
  )}

export default Project;