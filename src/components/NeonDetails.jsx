import { check, neonService } from '../assets'
import { pricing } from '../constants'
import Button from './Button'
import { Swiper, SwiperSlide } from 'swiper/react'

const NeonPricing = () => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        1024: { slidesPerView: 3.5 },
      }}
    >
      {pricing.map((item) => (
        <SwiperSlide key={item.id}>
          <div className='w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-4 [&>h4]:last:text-color-3'>
            <h4 className='h4 mb-4'>{item.title}</h4>

            <p className='body-2 min-h-[4rem] mb-3 text-n-1/50'>
              {item.description}
            </p>
            <small>starting from</small>
            <div className='flex items-center h-[5.5rem] mb-6'>
              <div className='text-[5.5rem] leading-none font-bold'>
                {item.price}
              </div>
              <sup className='h6'>DA</sup>
            </div>

            <Button className='w-full mb-6' white='true'>
              Contact us
            </Button>

            <ul>
              {item.features.map((feature, index) => (
                <li
                  key={index}
                  className='flex items-start py-5 border-t border-n-6'
                >
                  <img src={check} width={24} height={24} alt='Check' />
                  <p className='body-2 ml-4'>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default NeonPricing
