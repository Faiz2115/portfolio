import React from 'react'
import './style.scss'
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <>
            <section className="home-container">
                <div className="title">
                    <h4>Hi, my name is </h4>
                    <h5>Faizan Farooq</h5>
                    <h6>I am a </h6>
                    <div>

                        <TypeAnimation
                            sequence={[
                                '<Software Engineer/>',
                                2000,
                                '<Web Developer/>',
                                2000,
                                '<Programmer/>',
                                2000,
                                '<Coder/>',
                                2000,
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            className="type-animation"
                        />
                    </div>
                </div>



            </section>
        </>
    )
}

export default Banner