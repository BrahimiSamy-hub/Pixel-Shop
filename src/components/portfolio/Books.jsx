import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import speedy from '../../assets/portfolio/speedy.jpg'

const Books = () => {
  return (
    <PhotoProvider>
      <div className='grid grid-cols-4 gap-10 my-14'>
        <div className='flex justify-center col-span-4 md:col-span-2 lg:col-span-1 hover:cursor-pointer'>
          <PhotoView src={speedy}>
            <img
              src={speedy}
              alt='Shirt 1'
              className='object-fill w-full h-full border rounded-xl min-w-56 min-h-56 '
            />
          </PhotoView>
        </div>
      </div>
    </PhotoProvider>
  )
}

export default Books
