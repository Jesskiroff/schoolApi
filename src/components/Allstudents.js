import React, {useEffect, useState} from 'react';
import axios from 'axios'; 
const Allstudents = () => { 
    const [students, setStudents] = useState (null);
    useEffect (() =>{
        let fetchStudents = async () => {
            try {
                const {data} = await axios.get('http://localhost:1338/api/students')
                setStudents(data);
            
            } catch (err) {
              console.error ('Error fetching students,', err)
            }
        };
        fetchStudents();
    },[]);


    return(
        <div className='container-fluid'>
            <h2>All Students</h2>
            <div className=' px-3 py-3 flex-row d-flex justify container center'>
                {students.map((student) => {
                    return(
                     <div
                        key={student.student_id}
                        className='mx-3 col-sm-6 mb-3 mb-sm-0 shadow-lg'>
                        <div className='card shadiw-lg'>
                            <div className='card-body'>
                                <h5>
                                    {student.fname}{student.lname}
                                </h5>
                                <p>{student.email}</p>
                            </div>
                         </div>
                     </div>
                    )
                }
                )}
)
    </div>
    </div>

export default Allstudents;


// hw build navbar, have page for allstudents, single students, all subjects, single subjects
// on single student page, import everything as a form