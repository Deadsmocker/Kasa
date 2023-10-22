import React from "react";
import HomeBanner from "../../components/banner";
import aboutImg from '../../assets/aboutBanner.png'
import Collapsible from "../../components/collapsible";
import dataAbout from "../../data/about.json"
import "../About/_index.scss"
import "./../../style/base/_style.scss"

function About(){
    return(
    <main className='container'>    
        <HomeBanner classes={{container: 'about__banner',img: 'about__img'}} image={aboutImg} text={''}/>
        <section className="about__collapse">
        {dataAbout.map((collapse) => (
          <Collapsible
            key={collapse.id}
            //dynamique json//
            label={collapse.title}
            //dynamique json//
            content={collapse.text}
          />
        ))}
        </section>
    </main>
    )
}
export default About