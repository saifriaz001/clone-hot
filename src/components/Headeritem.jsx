import React from 'react'

function Headeritem({name,Icon}) {
    
  return (
    <div className="" >
        <div className='text-white flex flex-row  items-center 
    text-[19px] font-semibold cursor-pointers  gap-3  hover:underline 
     underline-offset-8  transition-all duration-200 ' >
        <Icon/>
        <h1 className='  '>{name}</h1>

        
        
      </div>
    </div>
  )
}

export default Headeritem;