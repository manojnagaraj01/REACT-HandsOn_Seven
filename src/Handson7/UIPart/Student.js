import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

function Student() {
    const stuData = useSelector ((state)=> console.log(state));
    const Navi = useNavigate();
    console.log(stuData)
  return (
    <>
        <h2>Student</h2>
        <button onClick={()=>Navi('/addstudent')}>ADD NEW STUDENT</button>
        <table border="1px" align='center' width="100%">
          <thead>
            <tr>
              <th>NAME</th>
              <th>AGE</th>
              <th>COURSE</th>
              <th>BATCH</th>
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
