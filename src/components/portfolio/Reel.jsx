import { useRef, useState } from 'react'
import speedyVideo from '../../assets/videos/animation.mp4'

const Reel = () => {
  const [playing, setPlaying] = useState(null)
  const videoRefs = useRef([])

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video) {
        video.pause()
      }
    })
    setPlaying(index)
    if (videoRefs.current[index].requestFullscreen) {
      videoRefs.current[index].requestFullscreen()
    } else if (videoRefs.current[index].webkitRequestFullscreen) {
      /* Safari */
      videoRefs.current[index].webkitRequestFullscreen()
    } else if (videoRefs.current[index].msRequestFullscreen) {
      /* IE11 */
      videoRefs.current[index].msRequestFullscreen()
    }
  }

  return (
    <div className='grid grid-cols-4 gap-10 my-14'>
      {[speedyVideo, speedyVideo, speedyVideo, speedyVideo].map(
        (videoSrc, index) => (
          <div
            key={index}
            className='flex justify-center col-span-4 md:col-span-2 lg:col-span-1 hover:cursor-pointer'
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={videoSrc}
              controls
              className='object-fill w-full h-full border rounded-xl min-w-56 min-h-56'
              onPlay={() => handlePlay(index)}
            />
          </div>
        )
      )}
    </div>
  )
}

export default Reel
