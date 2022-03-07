import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const About: NextPage = () => {
  return (
    <div className= {`${styles.sec} bg-white sec`} >
    <div className={`absolute right-0 pt-20   font-light ${styles.pop} ${styles.wid}`}>

      
      <p className=' text-center pt-1  pb-4 font-extrabold pr-4' >About Us</p>
    

  

<p className='pt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod incidunt ducimus, consectetur,
     ea quas magni, illo quos veniam ut sed aliquam dignissimos magnam ex vero velit quis? Similique,
      amet velit.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      </p>

      <div className='pt-14 text-center '>
      <button className={`${styles.bt} px-8 text-sm rounded-md py-2  `}>Read more</button>
      </div>
      
    
    </div>
 

     
    </div>
  )
}

export default About
