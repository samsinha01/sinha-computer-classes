import React, { useState } from 'react'
import courseData from '../../constants/courseData'

function ContactForm() {
  const [selectedCourses, setSelectedCourses] = useState([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleCourseSelect = (courseName) => {
    if (selectedCourses.includes(courseName)) {
      // If already selected, unselect it
      setSelectedCourses(selectedCourses.filter(course => course !== courseName))
    } else {
      // Add to selected
      setSelectedCourses([...selectedCourses, courseName])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedCourses.length === 0 || !name || !message) {
      alert('Please select at least one course, enter your name, and a message.')
      return
    }

    const coursesList = selectedCourses.join(', ')
    const fullMessage = `Courses: ${coursesList}%0AName: ${name}%0AMessage: ${message}`
    const whatsappURL = `https://wa.me/919770661844?text=${fullMessage}`
    window.open(whatsappURL, '_blank')

    setSelectedCourses([])
    setName('')
    setMessage('')
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex gap-2 flex-wrap">
          {courseData.map((item, index) => (
            <p
              key={index}
              onClick={() => handleCourseSelect(item.name)}
              className={`py-1 px-2 rounded-full border cursor-pointer transition-all duration-300 ${
                selectedCourses.includes(item.name)
                  ? 'bg-[#04364A] text-white border-[#04364A]'
                  : 'hover:bg-[#04364acd] hover:text-white'
              }`}
            >
              {item.name}
            </p>
          ))}
        </div>

        <div>
          <label htmlFor="name" className="block mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            className="py-1 px-2 border-2 border-gray-200 rounded-md w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter Your Message"
            className="py-1 px-2 border-2 border-gray-200 rounded-md w-full h-20"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-3 bg-[#04364A] rounded-full text-white hover:bg-[#021E2D] transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </>
  )
}

export default ContactForm
