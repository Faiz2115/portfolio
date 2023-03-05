import React, { useEffect, useState } from 'react'
import img1 from '../../images/4.jpg'
import { TypeAnimation } from 'react-type-animation';

import SocialLinks from '../SocialLinks';

const Home = () => {

  // const [slider, setSlider] = useState(1)

  // const sliderMet = () => {
  //   slider &&
  //   setSlider(slider+1)
  // }

  // useEffect(()=>{

  // setInterval(() => {
  //   sliderMet();
  // }, 5000)
  // },[])

  return (
    <section className="home-container">
      <div className="images">
        <img src={img1} alt="" />
        {/* <img src={img2} alt="" /> */}

      </div>

      <div className="desc">
        <div className="title">
          <h4>Hello, I Am</h4>
          <h5>Faiz</h5>
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

        <SocialLinks/>
      </div>


    </section>
  )
}

export default Home