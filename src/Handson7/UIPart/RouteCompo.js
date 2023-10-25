import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import ContactUs from './ContactUs'
import EditStudent from './EditStudent'
import AddStudent from './AddStudent'
import "./Handson7.css"
function RouteCompo() {
  return (
    <>
      <BrowserRouter>
      <ul>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/student'>STUDENT</NavLink></li>
        <li><NavLink to='/contact'>CONTACT</NavLink></li>
      </ul>
      
      
      
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/student' element={<Student/>}/>
              <Route path='/contact' element={<ContactUs/>}/>
              <Route path='/editstudent/:id' element={<EditStudent/>}/>
              <Route path='/addstudent' element={<AddStudent/>}/>
          </Routes>
      </BrowserRouter>    
    </>
  )
}

export default RouteCompo;