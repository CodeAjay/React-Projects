import React from 'react'
import './components.css'

function Card(props) {
  return (
    <>
        <div className='card flex'>
            <div className='card_image'>
                <img src={props.card_img} />
            </div>
            <div className='card_text'>
                <h5 className='text-2xl font-bold'>{props.card_heading}</h5>
                <p>{props.card_text}</p>
            </div>
        </div>
    </>
  )
}

export default Card