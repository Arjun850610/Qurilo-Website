import React from 'react'
import Heading from '../buttons/Heading'
import WhyChooseUsCard from '../cards/WhyChooseUsCard'

const WhyChooseUs = ( {data} ) => {
  return (
    <section>
      <div className='px-6 py-10 flex flex-col gap-8 lg:px-20 lg:py-20 lg:flex-row lg:gap-10 xl:gap-20'>
          <div className="flex flex-col gap-5 lg:w-1/2">
            <h2 className='text-black text-2xl lg:text-4xl 2xl:text-5xl capitalize font-[600] text-center lg:text-start'> {data.title} </h2>
            <p className="text-center text-[18px] 2xl:text-xl font-[400] mt-2 lg:text-start">{data.des}</p>
          </div>
          <div className="w-full flex flex-col gap-5 lg:w-1/2 lg:gap-10 lg:h-[30rem] lg:overflow-y-auto">
              {data.cards.map((card, i) => (
                <WhyChooseUsCard card={card} key={i} />
              ))}
          </div>
      </div>
    </section>
  )
}

export default WhyChooseUs