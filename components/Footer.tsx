import React from 'react'
import { NextPage } from 'next'
import styles from "../styles/Home.module.css"
import { BiChevronsUp} from "react-icons/bi";

const Footer:NextPage = () => {
  return (
    <div>
    <div className={`relative ${styles.foot} `}>
     
    <div className='ml-52 pt-2'>
    <div className='ml-96 absolute  rounded-full h-16   w-16 bg-white '>
<BiChevronsUp className='w-14' style={{ marginTop:"-23px", marginLeft:"5px"}}></BiChevronsUp>
</div>

</div>

      <div className="flex  pt-16 pb-3 pl-32 ">

        <div className='w-96  text-white'>

<p  className={`pb-4 ${styles.logo} pl-1 text-3xl`}>Rue</p>

<p className='text-sm leading-7 '>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Sed voluptatibus hic odit vero esse? Totam quae quia magni laudantium placeat
           rerum ducimus, provident vel at deserunt fugit, voluptatibus quisquam sapiente!
</p>
         
        </div>
        
      <div className=" text-white  ml-36 ">
  <p className=' font-bold '>Quick links</p>
  <div className='text-sm pt-6'>
  <p className='pb-2'>Home</p>
  <p className='pb-2'>About</p>
  <p className='pb-2'>Services</p>
  <p className='pb-2'>Contact</p>
  </div>

</div>
<div className='pl-10  ml-36'>
  <p className='text-white font-bold'>Follow Us</p>
</div>
        </div>




    </div>
    </div>
  )
}

export default Footer