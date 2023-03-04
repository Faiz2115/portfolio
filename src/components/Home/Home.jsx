import React, { useEffect, useState } from 'react'
import img1 from '../../images/4.webp'
import { TypeAnimation } from 'react-type-animation';
const Home = () => {

  const [slider, setSlider] = useState(1)

  const sliderMet = () => {
    // slider ? 
    // setSlider(slider+1);
  }

  // useEffect(()=>{

  setInterval(() => {
    sliderMet();
  }, 5000)
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
                'Developer', // Types 'One'
                1000, // Waits 1s
                'Programmer', // Deletes 'One' and types 'Two'
                1000, // Waits 2s
                'Coder', // Types 'Three' without deleting 'Two'
                1000, // Waits 2s
              ]}
              // speed={99}
              wrapper="h6"
              cursor={true}
              repeat={Infinity}
              className="type-animation"
            />
          </h6>
        </div>


      </div>
    </section>
  )
}

export default Home