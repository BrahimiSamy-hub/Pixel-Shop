import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { companyLogos } from '../constants'

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className='tagline mb-6 text-center text-n-1/50'>
        Helping people create beautiful content at
      </h5>
      <Swiper
        spaceBetween={10}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        speed={5000}
        slidesPerView={4}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {companyLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className='flex items-center justify-center h-[17.5rem]'>
              <img src={logo} width={134} height={28} alt='logo' className='' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CompanyLogos
