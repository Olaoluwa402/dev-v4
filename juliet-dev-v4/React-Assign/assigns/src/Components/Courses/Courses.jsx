import React from 'react'
import  {FaRegClock} from 'react-icons/fa'
import  {AiFillCheckCircle} from 'react-icons/ai'
import styles from './Courses.module.css'



const Courses = () => {
  return (
      <div className={styles.container}>
    <div className={styles.inner_container} > 
      <div className={styles.developer}>
        <img src="./julitex.jpeg" alt="" />
        <div className={styles.verified}>
        <h3>Juliet Samuel</h3>
        <AiFillCheckCircle color={'rgb(34, 231, 231)'} />
        </div>
        <p>Senior Developer Nigeria</p>
      </div>
      <div>
        <h3>SKILLS</h3>
        <div className={styles.btn} >
            <button>HTML</button>
            <button>CSS</button>
            <button>Sass</button>
            <button>JS</button>
            <button>React</button>
            <button>Redux</button>
            <button>Node</button>
            <button>MongoDb</button>
            <button>Python</button>
            <button>Flask</button>
            <button>Django</button>
            <button>Numpy</button>
            <button>Pandas</button>
            <button>Data Analysis</button>
            <button>MySQL</button>
            <button>Graph Ql</button>   
            <button>D3.js</button>
            <button>Gastby</button>
            <button>Docker</button>
            <button>Heroku</button>
            <button>Git</button>
        </div>
        <div className={styles.clock}>
            <FaRegClock />
        <span>Joined on June 6 2023</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Courses
