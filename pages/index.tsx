import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import First from '../components/First'
import About from '../components/About'
import Touch from '../components/Touch'
import Services from '../components/Services'
import Footer from '../components/Footer'
const Home: NextPage = () => {
  return (
    
      <div className={`${styles.all} w-full`}>
<div id='Home'>
<First></First>
</div>

<div id='About'>
<About></About>
</div>

<div id='Services'>
<Services></Services>
</div>

<div id='InTouch' className='relative'>
<Touch></Touch>
</div>

<div id="Footer" className='mt-96'>
<Footer></Footer>
</div>

      </div>
    
   
 
  )
}

export default Home
