import React from 'react'
import img1 from '../../images/4.jpg'

const Projects = () => {

  const item = [1,2,3];
  // console.log(item);
  return (
    <section className="project-container">
        <div className="title">
            <h1>
              Projects
            </h1>
            <h2>
              <span>
              My 
              </span> 
              Projects
            </h2>
        </div>
        <div className="latest">
            <h6>
                Latest
            </h6>
            <button>
                   All
            </button>
        </div>
        <div className="projects">
             {item.map(()=>{
              return(
                <div className="item1">
                <img src={img1} alt="" />
                <h6>Name</h6>
              </div>
                 
              )
             }) }
           
        </div>
    </section>
  )
}

export default Projects