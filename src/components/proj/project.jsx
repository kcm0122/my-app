import React from 'react';

function Project() {
 const data=[   
    {cover:"p3.png" ,title:"E-Commerce Database System " ,desc: "Implemented online shopping database using MS Access, including product search and filtering, user registration and authentication, shopping cart, and real-time inventory tracking and updates."}
    ,{cover:"p5.jpg", title:"Chess Game ",desc:"Develop a fully functional chess game using object-oriented programming. This includes creating a chessboard, determining victory conditions, removing chess pieces, and implementing other essential chess functionalities."}
,{cover:"p6.webp", title:"Animal Adoption Center ",desc:"This project emphasizes and utilizes the concept of a binary search tree to develop a system for an animal adoption center, including functionalities for deleting specific nodes, searching for nodes, and modifying animal data by C++."}
]
    
 return (
    <>
    <section id="project" className='project '>
    <div className='container flex'>
        <div className='left'>
            <div className='heading '>
                <h1>Portfolio</h1>
                </div>
                <p>Partial list of noteworthy projects I've completed in the past.</p>
               <p>Please Access <a href='https://github.com/kcm0122/Past-Project'>My Github </a> for other project</p>
                
            </div>
     </div>
     <div className=' container grid '>
     <div className='box'>
        <div className='text'>
         <div className='imgg'><img src={"p1.png"} alt=''/></div>
            <h2>Virtual Smart Home </h2>
            <p>Python-based control system utilizing OpenCV for computer vision and MediaPipe for audio/gesture recognition, enabling hands-free operation of smart furniture through real-time environmental inputs.</p></div>
        </div>
        <div className='box'>
        <div className='text'>
         <div className='imgg'><img src={"p2.png"} alt=''/></div>
            <h2>Rocat Car with Light Sensor </h2>
            <p>Developed an autonomous robotic vehicle using Arduino, integrating infrared sensors to achieve precise navigation on a track within a simulated environment. <a href='p2demo.MP4'>Video</a></p></div>
        </div>  
        <div className='box'>
        <div className='text'>
         <div className='imgg'><img src={"p4.png"} alt=''/></div>
            <h2>Imitation  Quizlet </h2>
            <p>Developed a Quizlet-inspired Android application using Android Studio, replicating core features, including user authentication, data persistence, and interactive quiz functionality etc. <a href='p4demo.mp4'>Video</a></p></div>
        </div>  
 
        {data.map((val)=>{return(
        <div className='box'><div className='text'>
         <div className='imgg'><img src={val.cover} alt=''/><img src={val.cover1} alt=''/></div>
            <h2>{val.title}</h2>
            <p>{val.desc}</p></div>
        </div>
    )})}
</div>   
</section>
</>
  )}

export default Project;