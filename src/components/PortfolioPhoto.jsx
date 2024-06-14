import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import menu from '../assets/shirt1.png'

const PortfolioPhoto = () => {
  return (
    <PhotoProvider>
      <div className='grid grid-cols-4 gap-10'>
        <div className='flex justify-center col-span-4 md:col-span-2 lg:col-span-1 hover:cursor-pointer'>
          <PhotoView src={menu}>
            <img
              src={menu}
              alt='Shirt 1'
              className='object-cover w-full h-full border rounded-xl min-w-56 max-h-48'
            />
          </PhotoView>
        </div>
        <div className='flex justify-center col-span-4 md:col-span-2 lg:col-span-1 hover:cursor-pointer'>
          <PhotoView src={menu}>
            <img
              src={menu}
              alt='Shirt 1'
              className='object-cover w-full h-full border rounded-xl min-w-56 max-h-48'
            />
          </PhotoView>
        </div>
        <div className='flex justify-center col-span-4 md:col-span-2 lg:col-span-1 hover:cursor-pointer'>
          <PhotoView src={menu}>
            <img
              src={menu}
              alt='Shirt 1'
              className='object-cover w-full h-full border rounded-xl min-w-56 max-h-48'
            />
          </PhotoView>
        </div>
        <div className='flex justify-center col-span-4 md:col-span-2 lg:col-span-1 hover:cursor-pointer'>
          <PhotoView src={menu}>
            <img
              src={menu}
              alt='Shirt 1'
              className='object-cover w-full h-full border rounded-xl min-w-56 max-h-48'
            />
          </PhotoView>
        </div>
      </div>
    </PhotoProvider>
  )
}

export default PortfolioPhoto
