import React, { useEffect, useState } from 'react'
import DivLeft from '../DivAnimation/DivLeft'
import './style.scss'
const Skills = () => {

    const skills = [
        {
            id: 1,
            name: 'React',
            percentage: '40'

        },
        {
            id: 2,
            name: 'JavaScript',
            percentage: '60'


        },
        {
            id: 3,
            name: 'HTML',
            percentage: '80'


        },
        {
            id: 4,
            name: 'CSS',
            percentage: '55'
        },
        {
            id: 4,
            name: 'GIT',
            percentage: '75'
        },
        {
            id: 5,
            name: 'Bootstrap',
            percentage: '80'
        },
        {
            id: 6,
            name: 'PHP',
            percentage: '40'
        },
        {
            id: 7,
            name: 'Node.js',
            percentage: '60'
        },
        {
            id: 8,
            name: 'Linux',
            percentage: '75'
        },
        {
            id: 9,
            name: 'MySQL',
            percentage: '60'
        },
        {
            id: 10,
            name: 'Express.js',
            percentage: '60'
        }

    ]




    return (
        <section className="skills-container">

            <div className="title">
                <h1>
                    Skill
                    <span>
                        Set
                    </span>
                </h1>
            </div>

            <div className="skills">

                {/* Animated Circular Progress Bar */}
                {skills.map((item, index) => {
                    return (
                        <div className="container">
                        <DivLeft>
                            <div className="circular-progress" style={{ background: `conic-gradient(#64ffda ${item.percentage / 100 * 360}deg, rgb(224, 202, 202) 0deg)` }}>
                                <span className='progress-value'>{item.percentage}%</span>
                            </div>
                        </DivLeft>
                            <span className='text'>
                                {item.name}
                            </span>
                        </div>
                    )
                })}


            </div>
        </section>
    )
}

export default Skills