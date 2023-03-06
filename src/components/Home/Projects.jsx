import React from 'react'
import img1 from '../../images/4.jpg'

const Projects = () => {

  const item = [1, 2, 3];
  // console.log(item);
  return (
    <section className="project-container">
      <div className="title">
       
        <h1>
          <span>
            My
          </span>
          Projects
        </h1>
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
        {item.map((i, index) => {
          return (
            <div className="item1"  >
              <img src={img1} alt="" />
              <h6>Name</h6>
            </div>

          )
        })}

      </div>
    </section>
  )
}

export default Projects