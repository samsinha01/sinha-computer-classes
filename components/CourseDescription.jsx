'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DOMPurify from 'dompurify'

export default function CourseDescription({ description }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [shortText, setShortText] = useState('')

  useEffect(() => {
    const tempElement = document.createElement('div')
    tempElement.innerHTML = description
    const plainText = tempElement.textContent || tempElement.innerText || ''
    setShortText(plainText.slice(0, 300) + '...')
  }, [description])

  return (
    <div className="courseDetails space-y-2">
      <AnimatePresence initial={false}>
        {isExpanded ? (
          <motion.div
            key="full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
          />
        ) : (
          <motion.p
            key="preview"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            {shortText}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-600 font-semibold transition hover:underline"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  )
}