import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AddStudent() {
    const dispatch = useDispatch();
    const Navi = useNavigate();
    const tempObj = {
        name : '',
        age : '',
        course : '',
        month : '',
    }
    const handlChange = (e) => {
        tempObj[e.target.name] = e.target.value;
    }
    const handleSubmit =()=> {
        // console.log(tempObj)
        dispatch(AddStudent({tempObj}))
        Navi('/student')
        // Navi(-1)
    }   
  return (
    <>
        <h2>This is new student place</h2>
        <input type='text' placeholder='Enter name' onChange={handlChange}/><br/>
        <input type='text' placeholder='Enter age' onChange={handlChange}/><br/>
        <input type='text' placeholder='Enter course' onChange={handlChange}/><br/>
        <input type='text' placeholder='Enter month' onChange={handlChange}/><br/>
        <button onClick={handleSubmit}>Add New Student Data</button>
    </>
  )
}

export default AddStudent;