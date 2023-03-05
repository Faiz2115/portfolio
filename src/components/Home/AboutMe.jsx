import React from 'react'
import img1 from '../../images/4.jpg'
import resume from "../../resume/Faizan.pdf"
import SocialLinks from '../SocialLinks'

const AboutMe = () => {
    return (
        <section className="about-container">
            <div className="title">
                <h1>
                    About

                </h1>
                <h2>
                    About
                    <span>
                        Me
                    </span>
                </h2>
            </div>

            <div className="detail">
                <h3>
                    Faizan Farooq
                </h3>
                <h4>
                    Computer Science Engineer
                </h4>

                <p>Software Engineer with excellent problem solving skills & ability to perform well in
                    a team.Passionate about coding & eagerly learnings new skills.</p>

                <a href={resume} download>
                    Resume
                </a>
            </div>

            <div className="image">
                <img src={img1} alt="" />
            </div>
            
            <SocialLinks/>
        </section>
    )
}

export default AboutMe