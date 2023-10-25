import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import "./Handson7.css"

function Student() {
    const stuData = useSelector ((state)=> state.Student);
    const Navi = useNavigate();
    console.log(stuData)
  return (
    <>
        {/* <h2>Student</h2> */}
        <div className='new-button-parent'>
          <button className='new-button' onClick={()=>Navi('/addstudent')}>ADD NEW STUDENT</button>
        </div>
        <table border="1px" align='center' width="100%">
          <thead>
            <tr>
              <th>SL NO.</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>COURSE</th>
              <th>BATCH</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
              {stuData.map((item, index)=>{
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.course}</td>
                            <td>{item.batch}</td>
                            <td><Link to= {`/editstudent/${index}`}>Edit</Link></td>
                        </tr>
                    )
                })}
          </tbody>
        </table>
    </>
  )
}

export default Student;
