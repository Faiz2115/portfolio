import React, { useEffect, useState } from 'react'
import './style.scss'
const Skills = () => {


    // const [startValue,setStartValue] = useState(0)

    // const [endValue,setEndValue] = useState(5)

    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         setStartValue(
    //             startValue + 1
    //         )

    //         if (startValue == endValue)
    //         {
    //             console.log('done');
    //             clearInterval(interval)
    //         }
    //         console.log(startValue);
    //         console.log(endValue);

    //     },1000)

    //     return () => {
    //         clearInterval(interval);
    //       };

    // },[])

    // const skills = [1,2,3,4,5,6,7,8]

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
                            <div className="circular-progress" style={{ background: `conic-gradient(#dc2f08 ${item.percentage / 100 * 360}deg, rgb(224, 202, 202) 0deg)` }}>
                                <span className='progress-value'>{item.percentage}%</span>
                            </div>
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