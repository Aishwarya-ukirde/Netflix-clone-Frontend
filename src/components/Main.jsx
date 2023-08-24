import React, { useEffect, useState } from 'react'
import requests from '../Request'
import axios from 'axios'


const Main = () => {
    const [movies , setmovies]=useState([])


    const movie= movies[Math.floor(Math.random()*movies.length)]
  
  
  useEffect(()=>{
    axios.get(requests.requestsPopular).then((response)=>{
        setmovies(response.data.results)
    })
  },[])
  // console.log(movie)
  
  const truncatestring=(str,num)=>{
    if(str?.length>num){
      return str.slice(0,num)+'...';
    }else{
      return str;
    }
  }
    return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full '>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover'src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
      <div className='absolute w-full top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold font-serif'>{movie?.title}</h1>
       <div className='my-4'>
            <button className=' border border-gray-300 bg-gray-300 py-2 px-5 text-black'>Play</button>
        <button className=' border border-gray-300 bg-black py-2 px-5 text-white ml-2'>watch later</button>
       </div>
       <p className='text-sm text-gray-300'>Released {movie?.release_date}</p>
       <p className='text-sm md:text-base text-gray-200 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>{truncatestring(movie?.overview,150)}</p>
      
      </div>
      </div>
      
    </div>
  )
}

export default Main
