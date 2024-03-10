import React, {useEffect, useState} from 'react';
import axios from 'axios'; 
const Allstudents = () => { 
    const [students, setStudents] = useState (null);
    useEffect (() =>{
        let fetchStudents = async () => {
            try {
                const {data} = await axios.get('http://localhost:1338/api/students')
                console.log(data);
            } catch (err) {
              console.error ('Error fetching students,', err)
            }
        };
        fetchStudents();
    },[]);
    return (<div> In the Allstudents components</div>)
}

export default Allstudents;