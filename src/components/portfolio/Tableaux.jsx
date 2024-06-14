import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import speedy from '../../assets/portfolio/wall/speedy.jpg'
import Benpack from '../../assets/portfolio/wall/benpack.jpg'
import Crunchy from '../../assets/portfolio/wall/crunchy.jpg'
import Dounia from '../../assets/portfolio/wall/dounia.jpg'
import mili from '../../assets/portfolio/wall/mili.jpg'
import crunchy2 from '../../assets/portfolio/wall/crunchy2.jpg'
import elhayat from '../../assets/portfolio/wall/elhayat.jpg'
import elhayat2 from '../../assets/portfolio/wall/elhayat2.jpg'
import detailing from '../../assets/portfolio/wall/detailing.jpg'
import kids from '../../assets/portfolio/wall/kids.jpg'

const Tableaux = () => {
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
        <div className='flex justify-center col-span-4 md:col-span-2 lg:col-span-1 hover:cursor-pointer'>
          <PhotoView src={Crunchy}>
            <img
              src={Crunchy}
              alt='Shirt 1'
              className='object-fill w-full h-full border rounded-xl min-w-56  min-h-56 '
            />
          </PhotoView>
        </div>
        <div className='flex justify-center col-span-4 md:col-span-2 lg:col-span-1 hover:cursor-pointer'>
          <PhotoView src={Benpack}>
            <img
              src={Benpack}
              alt='Shirt 1'
              className='object-fill w-full h-full border rounded-xl min-w-56  min-h-56 '
            />
          </PhotoView>
        </div>
        <div className='flex justify-center col-span-4 md:col-span-2 lg:col-span-1 hover:cursor-pointer'>
          <PhotoView src={Dounia}>
            <img
              src={Dounia}
              alt='Shirt 1'
              className='object-fill w-full h-full border rounded-xl min-w-56  min-h-56 '
            />
          </PhotoView>
        </div>
        <div className='flex justify-center col-span-4 md:col-span-2 lg:col-span-1 hover:cursor-pointer'>
          <PhotoView src={mili}>
            <img
              src={mili}
              alt='Shirt 1'
              className='object-fill w-full h-full border rounded-xl min-w-56  min-h-56'
            />
          </PhotoView>
        </div>
        <div className='flex justify-center col-span-4 md:col-span-2 lg:col-span-1 hover:cursor-pointer'>
          <PhotoView src={crunchy2}>
            <img
              src={crunchy2}
              alt='Shirt 1'
              className='object-fill w-full h-full border rounded-xl min-w-56  min-h-56'
            />
          </PhotoView>
        </div>
        <div className='flex justify-center col-span-4 md:col-span-2 lg:col-span-1 hover:cursor-pointer'>
          <PhotoView src={elhayat}>
            <img
              src={elhayat}
              alt='Shirt 1'
              className='object-fill w-full h-full border rounded-xl min-w-56  min-h-56'
            />
          </PhotoView>
        </div>
        <div className='flex justify-center col-span-4 md:col-span-2 lg:col-span-1 hover:cursor-pointer'>
          <PhotoView src={elhayat2}>
            <img
              src={elhayat2}
              alt='Shirt 1'
              className='object-fill w-full h-full border rounded-xl min-w-56  min-h-56'
            />
          </PhotoView>
        </div>
        <div className='flex justify-center col-span-4 md:col-span-2 lg:col-span-1 hover:cursor-pointer'>
          <PhotoView src={detailing}>
            <img
              src={detailing}
              alt='Shirt 1'
              className='object-fill w-full h-full border rounded-xl min-w-56  min-h-56'
            />
          </PhotoView>
        </div>
        <div className='flex justify-center col-span-4 md:col-span-2 lg:col-span-1 hover:cursor-pointer'>
          <PhotoView src={kids}>
            <img
              src={kids}
              alt='Shirt 1'
              className='object-fill w-full h-full border rounded-xl min-w-56  min-h-56'
            />
          </PhotoView>
        </div>
      </div>
    </PhotoProvider>
  )
}

export default Tableaux
