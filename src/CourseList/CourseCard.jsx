import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const CourseCard = ({ course }) => {

    const { _id,image, course_name, Instructor_name, Description, Enrollment_status, Course_duration, Schedule,
        Location, Prequisites, Syllabus } = course;

        const imageSize={
            height:"300px"
        }
        const cardStyle={
            height:"400px"
        }

    return (
        <div>
            <div style={cardStyle} className="card card-compact  bg-base-100 shadow-xl">
                <figure><img style={imageSize} src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{course_name}</h2>
                    
                    <div className="card-actions text-center">
                       <Link to={`/details/${_id}`}>
                       <button className="btn text-center btn-outline btn-secondary">View Details
                        <FaArrowRightLong ></FaArrowRightLong>
                        </button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;