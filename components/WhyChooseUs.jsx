import AccordionList from "./ui/Accordian";
import { motion } from "framer-motion";
import facilitiesData from "@/constants/facilitiesData";
import SectionTitle from "./SectionTitle";

export function WhyChooseUs() {
  return (
    <>
      <div>
        <SectionTitle subTitle="FACILITIES" title="WHY CHOOSE US"/>
        <div className="flex gap-2 px-20 items-center">
          <div className="flex-1">
            <motion.figure
              className="w-[500px]"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="why-choose-us.png"
                alt="Why Choose Us"
                className="w-full"
              />
            </motion.figure>
          </div>
          <div className="flex-1">
            <AccordionList data={[...facilitiesData]} />
          </div>
        </div>
      </div>
    </>
  );
}
