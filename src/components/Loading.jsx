import React, { useEffect } from 'react'
import animation from '../assets/videos/animation.mp4' // Import the video file from the assets directory

const Loading = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete()
    }, 10) // Increased timeout to ensure video can play

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <div className='w-full h-screen flex bg-black overflow-hidden'>
      <video
        className='w-full h-full object-contain'
        autoPlay
        muted
        playsInline
      >
        <source src={animation} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Loading
