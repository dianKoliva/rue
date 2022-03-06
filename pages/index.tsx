import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import First from '../components/First'

const Home: NextPage = () => {
  return (
    
      <div className={`${styles.all} w-full`}>
<div id='Home'>
<First></First>
</div>
      </div>
    
   
 
  )
}

export default Home
