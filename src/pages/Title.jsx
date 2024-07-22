import React from "react"

const Title = ({heading , subheading , type}) => {
  return (
    
    <div className=" mx-auto">
      <h1 className={`text-center ${type==="benefits" ? "text-black" : "text-darkBlue"} text-3xl font-semibold`}>
        {heading}
      </h1>
      <p className={`text-center mt-5 text-[14px] ${type==="benefits" ? "text-white" : "text-gray-700"} `}>
        {subheading}
      </p>
    </div>
  )
}

export default Title
