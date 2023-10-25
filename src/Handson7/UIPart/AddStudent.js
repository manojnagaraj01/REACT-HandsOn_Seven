import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../Slice/Slice';
import "./Handson7.css";

function AddStudent() {
    const dispatch = useDispatch();
    const Navi = useNavigate();
    const tempObj = {
        name : '',
        age : '',
        course : '',
        batch : ''
    }
    const handlChange = (e) => {
        tempObj[e.target.name] = e.target.value;
    }
    const handleSubmit =()=> {
        // console.log(tempObj)
        dispatch(addStudent({tempObj}))
        Navi('/student')
        // Navi(-1)
    }   
  return (
    <>
        <h2>This is new student place</h2>
        <div>
            <button onClick={handleSubmit} className='backButton'>Add New Student Data</button>
        </div>
        <div className='inputs'>
                <label className='new-label'>NAME
                    <input className='new-input' type='text' placeholder='Enter name' onChange={handlChange}/><br/>
                </label>
                <label className='new-label'>AGE
                    <input className='new-input' type='text' placeholder='Enter age' onChange={handlChange}/><br/>
                </label>
            </div>
            <div className='inputs'>
                <label className='new-label'>COURSE 
                    <input className='new-input' type='text' placeholder='Enter course' onChange={handlChange}/><br/>
                </label>
                <label className='new-label'>BATCH
                    <input className='new-input' type='text' placeholder='Enter batch' onChange={handlChange}/><br/>
                </label>
            </div>
    </>
  )
}

export default AddStudent;