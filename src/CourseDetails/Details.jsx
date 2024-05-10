// import React, { useState } from 'react';

// import DetailsCard from './DetailsCard';

// const Details = () => {
//     const [courseDetails,setCourseDetails]=useState([])

//     useState(()=>{

//         fetch('/course.json')
//         .then((res)=>res.json())

//         .then((data)=>setCourseDetails(data))
//     },[])
//     return (
//         <div>
//             <h1>Course Details</h1>

//             <div className='grid grid-cols-1'> 
//                 {
//                     courseDetails.map(courses=><DetailsCard key={courses._id} courses={courses}></DetailsCard>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Details;

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Details = () => {
    const data = useLoaderData();

    const style = {
        width: '500px',
        height: '400px',
    };

    const handleAddCourse = () => {
        const cartItem = {
            _id: data._id,
            image: data.image,
            course_name: data.course_name,
            instructor_name: data.instructor_name,
            description: data.description,
            enrollment_status: data.enrollment_status,
            course_duration: data.course_duration,
            Schedule: data.Schedule,
            location: data.location,
            prequisites: data.prequisites,
            syllabus: data.syllabus,
        };

        if (data.enrollment_status === 'Open') {
            fetch('https://course-server-side-lyart.vercel.app/manageEnrollment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartItem),
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Added to Course Successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Course Already Closed',
                text: 'Sorry, this course is already closed. Please choose another one.',
            });
        }
    };

    return (
        <div>
            <div>
                <h2 className='text-2xl text-center font-bold mb-3 mt-6'>Course<span className='text-purple-700'>Details</span></h2>
                <div className="card  bg-base-100 shadow-xl mx-auto" >
                    <figure className="px-10 pt-10">
                        <img style={style}  src={data.image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{data.course_name}</h2>
                        <p>Instructor_name: {data.instructor_name}</p>
                        <p>Enrollment_status: {data.enrollment_status}</p>
                        <p>Description: {data.description}</p>
                        <p>Duration: {data.course_duration}</p>
                        <p>Schedule: {data.Schedule}</p>
                        <p>Location: {data.location}</p>
                        <p>Prequisites:</p>
                        <ul>
                            {data.prequisites && data.prequisites.map((prerequisite, index) => (
                                <li key={index}>{prerequisite}</li>
                            ))}
                        </ul>
                        <p>Syllabus:</p>
                        <ul>
                            {data.syllabus && Object.entries(data.syllabus).map(([week, topic]) => (
                                <li key={week}>
                                    <strong>{week}:</strong> {topic}
                                </li>
                            ))}
                        </ul>
                        <div className="card-actions flex">
                            <button onClick={handleAddCourse} className="btn btn-outline btn-secondary">Enroll</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
