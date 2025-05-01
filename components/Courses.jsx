'use client';
import React from 'react';
import CourseCard from './ui/CourseCard';
import courseData from "@/constants/courseData";

function Courses() {
    return (
        <div className='courses-section'>
<<<<<<< HEAD
            <div className="flex px-5 lg:px-20 gap-2 flex-wrap justify-evenly bg-[url('/course-section-bg-img.jpg')] bg-cover bg-center">
=======
            <div className="flex px-7 lg:px-20 gap-2 flex-wrap justify-evenly bg-[url('/course-section-bg-img.jpg')] bg-cover bg-center">
>>>>>>> 851e58b4ebbeec977ab0b78c7935550b03b13e98
                <CourseCard data={[...courseData]}/>
            </div>
        </div>
    );
}

export default Courses;
