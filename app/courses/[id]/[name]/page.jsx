"use client";
import React, { useEffect, useState } from "react";
import { use } from "react";
import courseData from "@/constants/courseData";
import CourseDescription from "@/components/CourseDescription";
import { BookOpenText } from "lucide-react";

function Page({ params }) {
  const { id } = use(params);
  const [course, setCourse] = useState(null);
  const [openChapter, setOpenChapter] = useState(null);

  useEffect(() => {
    const foundCourse = courseData.find((course) => course.id == id);
    setCourse(foundCourse);
  }, [id]);

  const toggleChapter = (index) => {
    setOpenChapter(openChapter === index ? null : index);
  };

  if (!course) return null;

  return (
    <section>
      <figure className="">
        <img src="/banner-2.png" alt="Banner" className="w-full" />
      </figure>

      <main className="w-[92%] mx-auto">
        <div className="mt-4">
          <h1 className="text-3xl font-semibold">Course Description</h1>
          <CourseDescription description={course.description} />
        </div>

        <div className="mt-4">
          {course.syllabus.map((item, index) => {
            return (
              <div key={`${item.chapter[20]}${index}`} className="py-3 px-4 bg-blue-50 border border-gray-300 shadow-md mb-4 rounded-md">
                <div 
                  className="font-semibold text-lg cursor-pointer flex gap-2 items-center" 
                  onClick={() => toggleChapter(index)}
                >
                  <span className="p-1 rounded-md bg-indigo-400"><BookOpenText color="white"/></span> {item.chapter}
                </div>
                {openChapter === index && (
                  <ul className="ml-10 syllabus">
                    {item.topics.map((data, idx) => (
                      <li key={`${data[2]}${idx}`} className="py-1">{data}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
}

export default Page;