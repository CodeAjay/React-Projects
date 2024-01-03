import React from 'react'
import Contact from './Contact'
import About from './About'
import Services from './Services'
import Home from './Home/Index'

export function HomePage() {
    return (
      <>
      <Home />
      </>
    )
  }


export function AboutPage() {
  return (
    <>
    <About />
    </>
  )
}

export function ContactPage() {
    return (
      <>
      <Contact />
      </>
    )
}

  export function ServicesPage() {
    return (
      <>
      <Services />
      </>
    )
  }
