import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editStudent } from '../Slice/Slice';
import "./Handson7.css";

function EditStudent() {
  let ParamIndex = useParams().id;
  let StudentData = useSelector((state) => state.Student)
  let dispatch = useDispatch();
  let Navi = useNavigate();

  const [info, setInfo] = useState({
    name : StudentData[ParamIndex].name,
    age : StudentData[ParamIndex].age,
    course : StudentData[ParamIndex].course,
    batch : StudentData[ParamIndex].batch,
  });
  

  const handleChange = (e) => {
    setInfo({...info, [e.target.name]: e.target.value });
  }

  const handleClick = (e) => {
    // e.preventDefault()
    dispatch(editStudent({info, ParamIndex }))
    Navi('/student');
    // console.log(info)
  }

  return (
    <section >
      {/* <form> */}
            <div div className='inputs'>
                <label className='new-label'>NAME
                  <input className='new-input' type="text" name='name' placeholder={StudentData[ParamIndex].name} onChange={handleChange} /> <br/>
                </label>
                <label className='new-label'>AGE
                  <input className='new-input' type="number" name='age' placeholder={StudentData[ParamIndex].age} onChange={handleChange} /><br/>
                </label>
            </div>
            <div className='inputs'>
                <label className='new-label'>COURSE 
                  <input className='new-input' type="text" name='course' placeholder={StudentData[ParamIndex].course} onChange={handleChange} /><br/>
                </label>
                <label className='new-label'>BATCH
                  <input className='new-input' type="text" name='batch' placeholder={StudentData[ParamIndex].batch} onChange={handleChange} /><br/>
                </label>
            </div>
          {/* <button type="button" onClick={(e) => Navi('/student')} >Cancel</button> */}
          <div className='new-student-button'>
            <button className='update-button' onClick={handleClick}  >Update</button>
            <button className='cancel-button' onClick={() => Navi('/student')}> cancel </button>
          </div>
      {/* </form> */}
    </section>
  )
}

export default EditStudent;