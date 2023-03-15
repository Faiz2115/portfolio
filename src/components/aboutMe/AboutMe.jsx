import React from 'react'
import './style.scss'
import SocialLinks from '../socialLinks/SocialLinks'
import DivLeft from '../DivAnimation/DivLeft'
import DivRight from '../DivAnimation/DivRight'
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

            <div className="desc">

            <DivLeft className="detail">
                <h3>
               
                    Faizan 
                
                    <span>
                        Farooq
                    </span>
                </h3>
                <h4>
                    Computer Science Engineer
                </h4>

                <p>Software Engineer with excellent problem solving skills & ability to perform well in
                    a team.Passionate about coding & eagerly learnings new skills.</p>

                <a href='./Faizan.pdf' download>
                    Resume
                </a>
            </DivLeft>

            <DivRight className='image'>
                    <img src="images/4.jpg" alt="Faizan" />
            </DivRight>
            </div>

            {/* <SocialLinks /> */}
        </section>

    )
}

export default AboutMe