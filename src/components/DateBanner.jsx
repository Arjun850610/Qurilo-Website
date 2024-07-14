import React from 'react'

const Datebanner = ({date}) => {
    const [month, day, year] = date.split(',');
  return (
    <div className='bg-[#fff9b3] absolute top-0 left-0 h-22 w-20 px-3 py-2 text-center text-darkBlue rounded-br-md'>
        <p className='capitalize text-base font-medium'>{month}</p>
        <p className='font-semibold text-xl'>{day}</p>
        <p className='text-base font-medium'>{year}</p>
      
    </div>
  )
}

export default Datebanner