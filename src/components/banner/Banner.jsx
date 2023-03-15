import React from 'react'
import './style.scss'
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <>
            <section className="home-container">
        
               
                    <div className="title">
                        <h4>Hello, I Am</h4>
                        <h5>Faiz.</h5>
                        <h6>
                            <TypeAnimation
                                sequence={[
                                    '<Developer/>',
                                    1000,
                                    '<Programmer/>',
                                    1000,
                                    '<Coder/>',
                                    1000,
                                ]}
                                // wrapper="h6"
                                cursor={true}
                                repeat={Infinity}
                                className="type-animation"
                            />
                        </h6>
                    </div>

                    <div className="image">
                        {/* <SocialLinks /> */}
                        <img src="./images/f.png" alt="main-banner" />
                    </div>

                

            </section>
        </>
    )
}

export default Banner