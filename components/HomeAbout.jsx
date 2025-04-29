import React from "react";
import SectionTitle from "./SectionTitle";

function HomeAbout() {
  return (
    <>
      <section className="px-20">
        <SectionTitle title="ABOUT" subTitle="ABOUT US"/>
        <div className="flex gap-2 items-center pb-10">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-justify">
              At <strong>Sinha Computer Classes</strong>, we are committed to
              delivering quality education with a strong focus on real-world
              application. With over{" "}
              <strong>3 years of hands-on experience</strong> as a{" "}
              <strong>Frontend Developer</strong> and currently working as a{" "}
              <strong>React Developer</strong> in a reputed{" "}
              <strong>Product-Based Company</strong>, I bring practical industry
              insights and project-driven training directly to the classroom.
            </p>

            <p className="text-justify">
              We offer a wide range of courses tailored for both beginners and
              aspiring professionals, including <strong>React JS</strong>,{" "}
              <strong>MERN Stack Development</strong>,{" "}
              <strong>Web Development</strong> (Frontend, Backend, and
              Fullstack), <strong>C/C++</strong>, and <strong>Python</strong> —
              all with <strong>100% job assistance</strong> to guide you toward
              a successful career in tech. For students seeking fundamental
              computer knowledge, we also provide <strong>DCA</strong>,{" "}
              <strong>PGDCA</strong>, and <strong>BCA</strong> courses, focused
              on core subject learning rather than certification or degrees.
            </p>

            <p className="text-justify">
              What sets us apart is our dedication to{" "}
              <strong>practical-based learning</strong>. Every course includes{" "}
              <strong>live and real-time projects</strong> that help students
              build confidence and gain experience similar to working in a
              professional development environment. Join us to transform your
              skills into a strong foundation for your future career.
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <figure className="w-[400px] p-2 bg-white rounded-md border border-gray-200 shadow-gray-400 shadow-lg">
              <img src="about-img.png" alt="" className="w-full h-full rounded-sm" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeAbout;
