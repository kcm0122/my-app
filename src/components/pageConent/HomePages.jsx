import React from "react";
import Home from "../index/Home";
import Footer from "../footer/Footer";
import Project from "../proj/project";
import About_me from "../aboutme/about_me";
import Contact from "../contact/Contact";
import MySkill from "../Skill/myskill";




function HomePages() {
    return (
    <>
    <Home></Home>
    <About_me></About_me>
    <MySkill></MySkill>
    <Project></Project>
    <Footer></Footer>
    
    </>
    )
}

export default HomePages;