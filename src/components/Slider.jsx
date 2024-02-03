import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
import { useRef } from 'react';
const screenwidth=window.innerWidth;

function Slider() {
    const[movieList,setMovieList]=useState([]);
    const elementRef=useRef();
    useEffect(()=>{
        getTrendingVideos();

    },[])

    const getTrendingVideos=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            setMovieList(resp.data.results);

        })
    }

    const sliderRight=(element)=>{
        element.scrollLeft+=screenwidth-120;
    }

    const sliderLeft=(element)=>{
        element.scrollLeft-=screenwidth-120;
    }
  return (
    <div>
        <HiChevronLeft className='hidden md:block text-white 
        text-[30px] absolute mx-8 mt-[150px] 
        cursor-pointer' 
        onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className=' hidden md:block text-white 
        text-[30px] absolute mx-8 mt-[150px]
         cursor-pointer right-0'
        onClick={()=>sliderRight(elementRef.current)}/>
    
    
        
    <div className='flex overflow-x-auto w-full px-16 py-4  
    scrollbar-none scroll-smooth  ml-3' ref={elementRef}>
        {movieList.map((item)=>(
            <img src={IMAGE_BASE_URL+item.backdrop_path}
            className=' min-w-full  md:h-[310px]
               object-cover rounded-md   mr-5 object-left-top 
               hover:border-[4px]
               border-gray-400 transition-all  duration-100 ease-in-out'/>

            ))}
    </div>
    </div>
  )
}

export default Slider;