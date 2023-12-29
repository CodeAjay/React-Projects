// App.js

import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';



function Home() {
  return (
   <div className='py-5 text-green-500 text-4xl font-bold'><h1>Home Page</h1></div>
  )
}

function About () {
  return (
   <div className='py-5'><h1>About Page</h1></div>
  )
}

function Services (){
  return (
   <div className='py-5'><h1>Services Page</h1></div>
  )
}

function Contact () {
  return (
   <div className='py-5'><h1>Contact Page</h1></div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/services" Component={Services} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </div>
    </BrowserRouter>

    /* <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
    </BrowserRouter> */
  );
};

export default App;
