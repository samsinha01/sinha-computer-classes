"use client";
import Banner from "@/components/Banner";
import ContactUs from "@/components/ContactUs";
import Courses from "@/components/Courses";
import Header from "@/components/Header";
import HomeAbout from "@/components/HomeAbout";
import Navbar from "@/components/Navbar";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main className="bg-[#FAF3E0] pb-10 overflow-x-hidden">
        <Banner img="home-banner-1.png" />
        <HomeAbout />
        <Courses />
        <WhyChooseUs />
        <ContactUs />
      </main>
    </>
  );
}
