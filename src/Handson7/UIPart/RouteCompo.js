import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import ContactUs from './ContactUs'
import EditStudent from './EditStudent'
import AddStudent from './AddStudent'

function RouteCompo() {
  return (
    <>
      <BrowserRouter>
      <NavLink to='/'>HOME ||</NavLink>
      <NavLink to='/student'>STUDENT ||</NavLink>
      <NavLink to='/contact'>CONTACT ||</NavLink>
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