import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const First: NextPage = () => {
  return (
    <div className="  text-white ">
      <div className='flex'>
      <div>
        <p className={`${styles.logo} pt-10 pl-10 text-4xl `}>Rue</p>
      </div>
      <div className='absolute right-0 pt-10 text-sm  font-thin flex pr-12'>
      <p className={`mr-16 cursor-pointer ${styles.hover}`}>Home</p>
     <p className={`mr-16 cursor-pointer ${styles.hover}`}>About</p>
     <p className={`mr-16 cursor-pointer ${styles.hover}`}>Services</p>
     <p className={`mr-12 cursor-pointer ${styles.hover}`}>Connect</p>
      </div>
   
      </div>


      <div className='  pt-60 mt-2  '>
        <div className='pl-10 font-bold'>
        <p>COMPARED TO THE</p>
          
          <p className={`${styles.fera} pt-2`}> Ferrari-16</p>
        </div>
      
        <div className="dashboard flex pl-4 pt-2 text-sm">
          <div>
          <svg>
    <circle className={`${styles.bg}`} cx="57" cy="57" r="52" />
    <circle className={`${styles.meter1}`} cx="57" cy="57" r="52" />
  </svg>

  <div className='text-center'>
    <p>48%</p>
    <p>Faster than ever </p>
  </div>
          </div>
  
  <div>
  <svg>
    <circle className={`${styles.bg}`} cx="57" cy="57" r="52" />
    <circle className={`${styles.meter2}`} cx="57" cy="57" r="52" />
  </svg>
  <div className='text-center'>
    <p>23%</p>
    <p>Cost reduction</p>
  </div>
  </div>

  <div>
  <svg>
    <circle className={`${styles.bg}`} cx="57" cy="57" r="52" />
    <circle className={`${styles.meter3}`}cx="57" cy="57" r="52" />
  </svg>
  <div className='text-center'>
  <p>20%</p>
    <p>Gas Coast</p>
   
  </div>
  </div>

 
</div>
      </div>
     
    </div>
  )
}

export default First
