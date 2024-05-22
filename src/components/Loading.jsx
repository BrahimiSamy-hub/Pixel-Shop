import React, { useEffect } from 'react'
import animation from '../assets/videos/animation.mp4' // Import the video file from the assets directory

const Loading = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete()
    }, 500)

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <div className='w-full h-screen flex items-center justify-center bg-black overflow-hidden'>
      <video className='w-full h-auto' autoPlay muted>
        <source src={animation} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Loading
