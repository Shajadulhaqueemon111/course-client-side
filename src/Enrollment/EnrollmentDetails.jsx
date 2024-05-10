import React, { useEffect, useState } from 'react';
import EnrollmentCard from './EnrollmentCard';

const EnrollmentDetails = () => {

    const [enrollments,setEnrollment]=useState([])

    useEffect(()=>{

         fetch('https://course-server-side-lyart.vercel.app/manageEnrollment')
         .then((res)=>res.json())
         .then((data)=>setEnrollment(data))
    },[])
    return (
        <div>
           <h1 className='text-xl font-bold text-center'> Enrollment Course</h1>

           <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3'>
            {
                  enrollments.map(enrollmentses=><EnrollmentCard key={enrollmentses._id} enrollmentses={enrollmentses}></EnrollmentCard>)
            }
           </div>
        </div>
    );
};

export default EnrollmentDetails;