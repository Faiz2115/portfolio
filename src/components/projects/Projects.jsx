import React from 'react'
import './style.scss'
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineGithub } from 'react-icons/ai'
import { TbExternalLink } from 'react-icons/tb'
import DivUp from '../DivAnimation/DivUp';

const Projects = () => {

  const path = useLocation().pathname;
  // alert(path)

  const item = [1, 2, 1];
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
    
      <div className="projects">

        {item.map((i, index) => {
          return (
              <DivUp className="item">

                <div className="desc">
                  <h6>Title</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempore voluptas, consectetur illum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo autem libero cumque alias praesentium illo nesciunt voluptas. Incidunt vel, dignissimos esse, recusandae nesciunt, ratione quia quidem eos totam rerum necessitatibus..</p>


                  <div className='links'>
                    <Link to='https://www.google.com' target='_blank' className='link'>
                      Code
                      <AiOutlineGithub />
                    </Link>

                    <Link to='https://www.google.com' target='_blank' className='link'>
                      Live Demo
                      <TbExternalLink />
                    </Link>
                  </div>
                </div>

                <div className="image">
                  <img src='images/project-1.png' alt="" />
                </div>

              </DivUp>
          )
        })}
      </div>
  {path === '/' && <div className="latest">
        {/* <h6>
          Latest
        </h6> */}
        <Link to='portfolio'>
          All
        </Link>
      </div>}

    </section>
  )
}

export default Projects