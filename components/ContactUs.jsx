import React from 'react'
import SectionTitle from './SectionTitle'
import { Mail, Phone } from '@mui/icons-material'
import { Linkedin, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import ContactForm from './form/ContactForm';

function ContactUs() {
  return (
    <>
        <section>
            <SectionTitle title="CONTACT" subTitle="GET IN TOUCH" />
            <div className='w-[80vw] mx-auto bg-[#04364A] p-10 rounded-xl shadow-lg shadow-gray-600'>
                <div className='flex gap-3 justify-between'>
                    <div className='flex-1 flex flex-col justify-between'>
                        <p className='font-mono font-bold text-4xl text-white'>Les’t talk on something <span className='text-[#64CCC5]'>great</span> together</p>

                        <a href="mailto:anuragsinha.20411@gmail.com" className='flex gap-2 text-white'>
                            <Mail />
                            anuragsinha.20411@gmail.com
                        </a>

                        <a href="tel:+929770661844" className='flex gap-2 text-white'>
                            <Phone />
                            9770661844
                        </a>

                        <a href="https://maps.app.goo.gl/qvXSC5RB32UuBARq5" className='flex gap-2 text-white'>
                            <MapPin strokeWidth={2.5} />
                            behind City Centre Nayaganj Ward, Bhatapara
                        </a>

                        <div className="flex gap-4">
                            <a href="www.linkedin.com/in/sameer-sinha-546b4a280" className='text-white'>
                                <Linkedin />
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=9770661844&text=Hi, I am visiting your website and I Want to Inquiry related Course" className='text-white'>
                                <FaWhatsapp size={24}/>
                            </a>
                        </div>
                    </div>

                    <div className='flex-1 bg-white py-10 px-5 rounded-lg'>
                        <p className='text-[#04364A] mb-2'>I’m interested in:</p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactUs