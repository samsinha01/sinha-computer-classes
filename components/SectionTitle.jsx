import React from 'react'

function SectionTitle({title, subTitle}) {
  return (
    <div className='flex justify-center relative my-5'>
        <h1 className='text-center font-bold text-7xl opacity-10 tracking-wider'>{title}</h1>
        <h2 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-2xl'>{subTitle}</h2>
    </div>
  )
}

export default SectionTitle