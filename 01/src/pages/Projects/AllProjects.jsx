import React from 'react'
import "../pages.css"
import { Link, Routes, Route } from 'react-router-dom'
import Project1 from './Project1'
import Project2 from './Project2'

function AllProjects() {
  return (
    <>
        <div className='py-5 text-green-500 text-5xl flex font-bold banner'>
            <h1>All Projects</h1>
        </div>
        <div className="container">
            <div className="projects flex direction-row flex-wrap justify-center gap-9 text-center">
                <Link to="/projects/project1">Project1</Link>
                <Link to="/projects/project2">Project2</Link>
                <Link to="/projects/project3">Project3</Link>
            </div>
        </div>
        
    </>
  )
}

export default AllProjects