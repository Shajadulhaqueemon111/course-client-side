import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const EnrollmentCard = ({enrollmentses}) => {

    const { _id,image, course_name, instructor_name, description, enrollment_status, course_duration, schedule,
        location, prequisites, syllabus } =enrollmentses;

        
        const imageSize={
            height:"300px"
        }
        const cardStyle={
            height:"1000px",
            width:"400px"
        }
    return (
        <div>
             <div style={cardStyle} className="card card-compact  bg-base-100 shadow-xl">
                <figure><img style={imageSize} src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{course_name}</h2>
                    <p>Instructor_name: {instructor_name}</p>
                        <p>Enrollment_status: {enrollment_status}</p>
                        <p>Description: {description}</p>
                        <p>Duration: {course_duration}</p>
                        <p>Schedule: {schedule}</p>
                        <p>Location: {location}</p>
                    <div className="card-actions text-center">
                    
                       <button className="btn text-center btn-outline btn-secondary">View Details
                        <FaArrowRightLong ></FaArrowRightLong>
                        </button>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrollmentCard;