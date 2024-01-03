import React from 'react'
import Hero from './Hero'
import Card from '../../components/Card'
import image from "./bluehost.png"
import '../pages.css'


export default function HomePage() {
  return (
    <>
    <Hero />
    <div className='container'>
        <div className='cards'>
            <Card card_img={image} card_heading="Card Heading" card_text="This is card text"/>
            <Card card_img={image} card_heading="Card 2 Heading" card_text="Card 2"/>            
            <Card card_img={image} card_heading="Card 2 Heading" card_text="Card 2"/>
            <Card card_img={image} card_heading="Card 2 Heading" card_text="Card 2"/>
        </div>
    </div>
    </>
  )
}
