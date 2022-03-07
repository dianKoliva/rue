import React from 'react'
import type { NextPage } from 'next'
import styles from "../styles/Home.module.css"

const Touch:NextPage = () => {
  return (
    <div>

<div className={`w-full ${styles.tcont}`}>
    <p className='text-white text-xl font-bold text-center pt-8 '>Get in touch with us</p>

    <div className='flex'>

        <div className='bg-white  h-96 w-96' >
<p className='font-bold text-center'>Message Us</p>

<p>Email</p>
<input type="text" name="" id="" />

        </div>

    </div>
</div>

    </div>
  )
}

export default Touch