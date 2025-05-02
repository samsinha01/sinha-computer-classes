'use client';
import React from 'react';
import CourseCard from './ui/CourseCard';
import courseData from "@/constants/courseData";
import SectionTitle from './SectionTitle';

function Courses() {
    return (
        <div className='courses-section'>
            <SectionTitle title="AVAILABLE" subTitle="COURSES" />
            <div className="flex px-5 lg:px-20 gap-2 flex-wrap justify-evenly bg-[url('/course-section-bg-img.jpg')] bg-cover bg-center">
            <CourseCard data={[...courseData]}/>
            </div>
        </div>
    );
}

export default Courses;
