import React from 'react'

const WhyChooseUsCard = ({card}) => {
  return (
    <div className='flex gap-6' >
            <img src={card.image} alt={card.cardTitle} className='w-10 h-10 object-cover aspect-auto' />
        <div className="flex flex-col items-start gap-2 border-b-[1px] border-primary-500 pb-4">
            <h3 className='text-lg font-[700]'>{card.cardTitle}</h3>
            <p className='text-base     '>{card.cardDes}</p>
        </div>
    </div>
  )
}

export default WhyChooseUsCard