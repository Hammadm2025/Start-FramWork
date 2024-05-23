import React, { useState } from 'react'
import logo from"./../../assets/avataaars.svg"

export default function Home() {


  return( <>
  
  <div className='text-white flex flex-col justify-center items-center container mx-auto bg-green-500  pb-80 '>
    <img src={logo} alt="" className='w-80' />
    <h1 className='font-bold text-5xl '>START FRAMEWORK</h1>
    <p>Graphic Artist - Web Designer - Illustrator</p>
  </div>

  
  </>
)}
