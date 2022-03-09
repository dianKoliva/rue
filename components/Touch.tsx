import React from 'react'
import type { NextPage } from 'next'
import styles from "../styles/Home.module.css"
import {BiMessageDots} from "react-icons/bi";
import {BiPhone} from "react-icons/bi";
import { BiLocationPlus } from "react-icons/bi";
import { BsChatLeftTextFill } from "react-icons/bs";
import {BsBriefcaseFill } from "react-icons/bs";



const Touch:NextPage = () => {
  return (
    <div>

<div className={`w-full ${styles.tcont} `}>

    
    <p className='text-white text-xl font-bold text-center pt-8 '>Get in touch with us</p>

    <div className='flex mt-10 p-4 pb-10'>

        <div className='bg-white p-6  ml-52  shadow-xl rounded-md   h-80 w-80' >
<p className='text-sm font-bold text-center'>Contact Details</p>

<div className='mb-5 text-xs mt-1 text-center'>
    <p className=''>
        <BiPhone className='h-4 absolute' style={{marginTop:"1px", marginLeft:"20px"}}></BiPhone>
        788-888-888</p>
    <p className='mt-3'> <BiLocationPlus className='h-4 absolute' style={{marginTop:"0px",marginLeft:"20px"}}></BiLocationPlus> Kimironko kk49 </p>
</div>


<div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510403.19426079595!2d29.778611332812485!3d-1.9427570000000047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5d13cdec6db%3A0x3979031864bbd4eb!2sCar%20Wash!5e0!3m2!1ssw!2srw!4v1646669031998!5m2!1ssw!2srw" width="270" height="200" style={{border:"0"}} 
 aria-hidden="false"

loading="lazy"></iframe>
</div>


</div>







        <div className='bg-white p-6   ml-40 shadow-xl rounded-md   h-80 w-80' >
<p className='font-bold text-center'>Message Us</p>


<div className='pl-4 pt-6'>

<div className='text-sm mt-4'>
    <div className=' flex'>
  
    <p className='flex'> 
    
     Email</p>
    </div>


<input  className=' w-60 border-b-2 border-solid border-black
focus:outline-none
' type="text" name="" id="" />
</div>
<div className='text-sm mt-6'>
<p>

    Message</p>
<input  className='  w-60  border-b-2 border-solid border-black
focus:outline-none
' type="text" name="" id="" />
</div>

</div>

<div className='mt-14 text-center'>
<button className='bg-black rounded-sm  text-white text-sm px-6 py-2 '>
    send message
</button>
</div>




        </div>

    </div>
</div>

    </div>
  )
}

export default Touch