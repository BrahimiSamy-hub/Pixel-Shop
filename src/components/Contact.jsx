import Section from './Section'
import Heading from './Heading'
import { service1, service2, service3, service, check } from '../assets'
import { brainwaveServices, brainwaveServicesIcons } from '../constants'
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from './design/Services'
import Generating from './Generating'
import video from '../assets/videos/video.mp4'

const Contact = () => {
  return (
    <Section id='how-to-use'>
      <div className='container mt-10'>
        <Heading
          title='Contact Us'
          text='Pixel unlocks the potential of AI-powered applications'
        />
        <div className='relative'>
          <div className='relative z-1 grid gap-5 lg:grid-cols-2'>
            <div className='relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden'>
              <h4 className='h4 mt-10 text-center'>Ask a Question</h4>
              <div className='flex flex-row'>
                <form>
                  <label>
                    Name:
                    <input type='text' name='name' />
                  </label>
                  <label>
                    Email:
                    <input type='email' name='email' />
                  </label>
                  <label>
                    Message:
                    <input type='text' name='message' />
                  </label>
                  <button type='submit'>Submit</button>
                </form>
              </div>
            </div>

            <div className=' bg-n-7 rounded-3xl min-h-[39rem] overflow-hidden lg:min-h-[46rem] '>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.9825938283684!2d6.170534775461951!3d35.554132072628484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f41158da88865b%3A0xf23a3bf30fc4c9fc!2sPixel%20Creative%20Agency!5e0!3m2!1sfr!2sdz!4v1715290385507!5m2!1sfr!2sdz'
                allowfullscreen=''
                loading='lazy'
                className='w-full h-full'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contact
