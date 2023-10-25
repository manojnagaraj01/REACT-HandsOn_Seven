import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editStudent } from '../Slice/Slice';
function EditStudent() {
  let Navi = useNavigate();
  let StudentData = useSelector((state) => state.Student)
  let ParamIndex = useParams().id;
  let dispatch = useDispatch();

  const [info, setInfo] = useState({
    name: StudentData[ParamIndex].name,
    age: StudentData[ParamIndex].age,
    course: StudentData[ParamIndex].course,
    batch: StudentData[ParamIndex].batch,
  });
  

  const handleChange = (e) => {
    setInfo({...info, [e.target.name]: e.target.value });
  }

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(editStudent({info, ParamIndex }))
    Navi('/student');
  }

  return (
    <section >
      {/* <form> */}
          <input type="text" name='stuName' placeholder={StudentData[ParamIndex].stuName} className='stuDescInput' onChange={handleChange} /> <br/>
          <input type="number" name='stuAge' placeholder={StudentData[ParamIndex].stuAge} className='stuDescInput' onChange={handleChange} /><br/>
          <input type="text" name='stuCourse' placeholder={StudentData[ParamIndex].stuCourse} className='stuDescInput' onChange={handleChange} /><br/>
          <input type="text" name='stuBatch' placeholder={StudentData[ParamIndex].stuBatch} className='stuDescInput' onChange={handleChange} /><br/>
          {/* <button type="button" onClick={(e) => Navi('/student')} >Cancel</button> */}
          <button onClick={handleClick}>Update</button>
          <button onClick={handleClick}>Back</button>
      {/* </form> */}
    </section>
  )
}

export default EditStudent;