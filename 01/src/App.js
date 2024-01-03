// App.js

import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AboutPage, ServicesPage, ContactPage, HomePage } from "./pages/Index";
import Footer from "./components/Footer";
import Project1 from "./pages/Projects/Project1";
import Project2 from "./pages/Projects/Project2";
// import Project3 from "./pages/Projects/Project3";
import AllProjects from "./pages/Projects/AllProjects";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/services" Component={ServicesPage} />
          <Route path="/contact" Component={ContactPage} />
          {/* <Route path="/projects/project3" Component={Project3} /> */}
          <Route path="/projects/" element={<AllProjects />} >
            <Route path="project1" Component={Project1} />
            <Route path="project2" Component={Project2} />
          </Route>
        </Routes>
        <Footer />
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
