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

const Details = () => {

    const data =useLoaderData()
    console.log(data)
    const {_id,image, course_name, instructor_name, description, enrollment_status, course_duration, Schedule,
                location, prequisites, syllabus }=data

                const style = {
                    width: '500px',
                    height: '400px',
                } 
                
            
    return (
        <div>
              <div>
            <h2 className='text-2xl font-bold mb-3 mt-6'>Booking <span className='text-purple-700'>Details</span></h2>
            <div className="card  bg-base-100 shadow-xl mx-auto" >
                <figure className="px-10 pt-10">
                    <img style={style}  src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{data.course_name}</h2>
                    <p>Instructor_name: {data.instructor_name}</p>
                    <p>Enrollment_status: {data.enrollment_status}</p>
                    <p>Description: {data.description}</p>
                    <p>Duration: {data.course_duration}</p>
                    <p>Schedule: {data.schedule}</p>
                      <p>Location: {data.location}</p>  
                      <p>Prequisites:</p>  
                      <ul>
                            {data.prerequisites.map((prerequisite, index) => (
                                <li key={index}>{prerequisite}</li>
                            ))}
                        </ul>
                      <p>syllabus:</p>  
                      <ul>
                            {Object.entries(data.syllabus).map(([week, topic]) => (
                                <li key={week}>
                                    <strong>{week}:</strong> {topic}
                                </li>
                            ))}
                        </ul>
                    <div className="card-actions flex">
                        <button  className="btn btn-outline btn-secondary">Enroll</button>


                    </div>
                </div>
            </div>

        </div>
    
        </div>
    );
};

export default Details;