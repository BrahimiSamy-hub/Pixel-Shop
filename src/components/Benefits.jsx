import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaCamera,
  FaSeedling,
  FaCode,
  FaMusic,
  FaLightbulb,
} from 'react-icons/fa'
import { GiDiamondRing } from 'react-icons/gi'
import { CiPen } from 'react-icons/ci'
import Heading from './Heading'
import Section from './Section'
import Arrow from '../assets/svg/Arrow'
import { GradientLight } from './design/Benefits'
import { benefits } from '../constants'

const iconComponents = {
  FaCamera: <FaCamera />,
  CiPen: <CiPen />,
  GiDiamondRing: <GiDiamondRing />,
  FaCode: <FaCode />,
  FaMusic: <FaMusic />,
  FaLightbulb: <FaLightbulb />,
}

const Benefits = () => {
  return (
    <Section id='services'>
      <div className='container relative z-2 mt-8'>
        <Heading className='md:max-w-md lg:max-w-2xl' title='Our Services' />
        <div className='flex flex-wrap gap-10 mb-10 justify-center'>
          {benefits.map((item) => (
            <Link to={item.url} key={item.id}>
              <div
                className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] shadow-lg'
                data-aos='zoom-in'
                style={{
                  border: '2px solid transparent',
                  borderImage:
                    'linear-gradient(to bottom, #F17A28, transparent) 1',
                  boxShadow: '0 0 0 1px #26242C',
                  borderRadius: '3%',
                }}
              >
                <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
                  <h5 className='h5 mb-5'>{item.title}</h5>
                  <p className='body-2 mb-6 text-n-3'>{item.text}</p>
                  <div className='flex items-center mt-auto object-contain'>
                    <div className='text-3xl border p-2 rounded border-[#F17A28] bg-[#F17A28]'>
                      {iconComponents[item.icon]}
                    </div>
                    <p className='ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider'>
                      more details
                    </p>
                    <Arrow />
                  </div>
                </div>

                {/* {item.light && <GradientLight />} */}

                <div className='absolute inset-0.5 bg-n-8'>
                  <div className='absolute inset-0 opacity-10 transition-opacity hover:opacity-30'>
                    {item.imageUrl && (
                      <img
                        loading='lazy'
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className='w-full h-full object-cover'
                      />
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Benefits
