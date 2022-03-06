import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const About: NextPage = () => {
  return (
    <div className= {`${styles.sec} bg-white sec`} >
    <div className={`absolute right-0 w-96  font-light ${styles.pop}`}>

    <p >About Us</p>

<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod incidunt ducimus, consectetur,
     ea quas magni, illo quos veniam ut sed aliquam dignissimos magnam ex vero velit quis? Similique,
      amet velit.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam qui odit,
       dolorem odio aspernatur cupiditate quaerat sunt tempore corrupti possimus maiores iste 
       velit quia dolor nulla, rem mollitia exercitationem quasi.
      </p>
    </div>
 

     
    </div>
  )
}

export default About
