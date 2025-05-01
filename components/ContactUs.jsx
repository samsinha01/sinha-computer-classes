import React from "react";
import SectionTitle from "./SectionTitle";
import { Mail, Phone } from "@mui/icons-material";
import { Linkedin, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "./form/ContactForm";

function ContactUs() {
  return (
    <>
      <section>
        <SectionTitle title="CONTACT" subTitle="GET IN TOUCH" />
        <div className="mx-5 lg:w-[80vw] lg:mx-auto bg-[#04364A] p-4 lg:p-10 rounded-xl shadow-lg shadow-gray-600">
          <div className="flex flex-col lg:flex-row gap-3 justify-between">
            <div className="flex-1 flex gap-4 lg:gap-0 flex-col justify-between order-2 lg:order-1">
              <p className="font-mono font-bold text-4xl text-white">
                Les’t talk on something{" "}
                <span className="text-[#64CCC5]">great</span> together
              </p>

              <a
                href="mailto:anuragsinha.20411@gmail.com"
                className="flex gap-2 text-white"
              >
                <Mail />
                anuragsinha.20411@gmail.com
              </a>

              <a href="tel:+929770661844" className="flex gap-2 text-white">
                <Phone />
                9770661844
              </a>

              <a
                href="https://maps.app.goo.gl/qvXSC5RB32UuBARq5"
                className="flex gap-2 text-white"
              >
                <MapPin strokeWidth={2.5} />
                behind City Centre Nayaganj Ward, Bhatapara
              </a>

              <div className="flex gap-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/sameer-sinha-546b4a280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white text-[#0274b3] shadow-md transition-all duration-300 ease-in-out hover:shadow-xl"
                >
                  <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0274b3] transition-all duration-300 ease-in-out group-hover:h-full group-hover:rounded-full"></div>
                  <Linkedin
                    className="relative z-10 w-[32px] h-[32px] group-hover:text-white transition-colors duration-300"
                    strokeWidth={2}
                  />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://api.whatsapp.com/send?phone=9770661844&text=Hi, I am visiting your website and I Want to Inquiry related Course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white text-[#25D366] shadow-md transition-all duration-300 ease-in-out hover:shadow-xl"
                >
                  <div className="absolute bottom-0 left-0 w-full h-0 bg-[#25D366] transition-all duration-300 ease-in-out group-hover:h-full group-hover:rounded-full"></div>
                  <FaWhatsapp
                    size={32}
                    className="relative z-10 group-hover:text-white transition-colors duration-300"
                  />
                </a>
              </div>
            </div>

            <div className="flex-1 bg-white py-10 px-5 rounded-lg order-1 lg:order-2">
              <p className="text-[#04364A] mb-2">I’m interested in:</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
