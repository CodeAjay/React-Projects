import React, { useState } from 'react'

function Project1() {
    const [color, setBackground]=useState("olive");
    const styl={
        backgroundColor:color
    }
  return (
    <>
    <div className="main w-full h-screen duration-200 flex justify-center" style={styl}>
        <div className="buttons fixed flex bottom-10 justify-center bg-white rounded gap-2 p-2 rounded-3xl" style={{backgroundColor:'white'}}>
            <button className='py-2 px-10 rounded-3xl' style={{backgroundColor:"lavender"}} onClick={()=>setBackground('lavender')}>Lavender</button>
            <button className='py-2 px-10 rounded-3xl' style={{backgroundColor:"red"}} onClick={()=>setBackground('red')}>Red</button>
            <button className='py-2 px-10 rounded-3xl' style={{backgroundColor:"green"}} onClick={()=>setBackground('green')}>Green</button>
            <button className='py-2 px-10 rounded-3xl' style={{backgroundColor:"blue"}} onClick={()=>setBackground('blue')}>Blue</button>
            <button className='py-2 px-10 rounded-3xl' style={{backgroundColor:"yellow"}} onClick={()=>setBackground('yellow')}>Yellow</button>
            <button className='py-2 px-10 rounded-3xl' style={{backgroundColor:"black"}} onClick={()=>setBackground('black')}>Black</button>
        </div>
    </div>
    </>
  )
}

export default Project1