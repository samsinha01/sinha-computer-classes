"use client";
import Banner from "@/components/Banner";
import ContactUs from "@/components/ContactUs";
import Courses from "@/components/Courses";
import HomeAbout from "@/components/HomeAbout";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main className="bg-[#FAF3E0] pb-10 overflow-x-hidden">
        <Banner img="/banner-1.png" />
        <HomeAbout />
        <Courses />
        <WhyChooseUs />
        <ContactUs />
      </main>
    </>
  );
}
