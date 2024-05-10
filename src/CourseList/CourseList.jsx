import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';

const CourseList = () => {

    const [courses,setCourse]=useState([]);

    useEffect(()=>{

        fetch('http://localhost:5000/course')
        .then((res)=>res.json())
        .then((data)=>setCourse(data))
    },[])
    return (
        <div>
            <h1 className='text-2xl font-bold text-center mt-6'>Course List</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 mx-auto '>
                {
                    courses.map(course=><CourseCard key={course._id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default CourseList;