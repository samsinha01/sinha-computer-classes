import React from "react";
import Link from "next/link";

function CourseCard({ data }) {

  return (
    <>
      {data.map((course) => (
        <div key={course.name} className="w-[300px] p-5 perspective-[1000px]">
          <div
            className="pt-12 border-4 border-white bg-[#f0f0f0] w-full shadow-[0_30px_30px_-10px_rgba(142,142,142,0.3)] transition-all duration-500 transform-style-3d hover:[transform:rotate3d(0.5,1,0,15deg)]"
            style={{
              backgroundImage:
                "linear-gradient(135deg,#0000 18.75%,#f3f3f3 0 31.25%,#0000 0), repeating-linear-gradient(45deg,#f3f3f3 -6.25% 6.25%,#ffffff 0 18.75%)",
              backgroundSize: "60px 60px",
              backgroundPosition: "0 0, 0 0",
            }}
          >
            {/* Content Box */}
            <div className="bg-gray-600 px-6 pt-[60px] pb-6 transition-all duration-500 transform-style-3d">
              <span
                className="inline-block text-white text-[25px] font-black transition-all duration-500"
                style={{ transform: "translate3d(0px,0px,50px)" }}
              >
                {course.name}
              </span>
              <p
                className="mt-2 text-md font-bold text-[#f2f2f2] transition-all duration-500"
                style={{ transform: "translate3d(0px,0px,30px)" }}
              >
                {course.summary}
              </p>
              <Link href={`/courses/${course.id}/${encodeURIComponent(course.name)}`}>
                <span
                  className="inline-block mt-4 font-black text-xs rounded-md uppercase text-black bg-white py-2 px-3 cursor-pointer transition-all duration-500 hover:scale-110"
                  style={{ transform: "translate3d(0px,0px,20px)" }}
                >
                  See More
                </span>
              </Link>
            </div>

            {/* Icon Box */}
            <div
              className="absolute top-[30px] right-[30px] h-[60px] w-[60px] bg-white border border-gray-600 p-1 shadow-[0_17px_10px_-10px_rgba(100,100,111,0.2)]"
              style={{ transform: "translate3d(0px,0px,80px)" }}
            >
              <figure className="flex items-center justify-center h-full">
                <img src={`${course.icon}`} alt="course icon" className="w-full h-full" />
              </figure>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CourseCard;
