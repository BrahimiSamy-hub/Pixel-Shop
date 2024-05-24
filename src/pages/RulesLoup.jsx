import Section from '../components/Section'
import ButtonGradient from '../assets/svg/ButtonGradient'
import { useTranslation } from 'react-i18next'
import { FaWolfPackBattalion } from 'react-icons/fa'

const RulesLoup = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Section
          className='pt-[8rem] -mt-[5.25rem] min-h-screen'
          crosses
          crossesOffset='lg:translate-y-[5.25rem]'
          customPaddings
        >
          <div className='container relative'>
            <h1 className='h1 uppercase text-center text-wrap'>
              {t('titleWerWerwolf')}
            </h1>

            <p className='uppercase h5 my-8'>
              {t('descriptionWerwolf')}
              <span className='text-[#F17A28]'>
                {t('descriptionNumberCardsWerwolf')}
              </span>
              {t('descriptionNumberRolesWerwolf')}
            </p>
            <hr />
            <div className='mt-8'>
              <h2 className='h2 uppercase mb-8'> {t('titleRulesWerwolf')}</h2>
              <p className='h6 '>{t('descriptionRulesWerwolf')}</p>
            </div>
            <div className='mt-8'>
              <h2 className='h2 uppercase mb-8'> {t('rolesWerwolf')}</h2>

              <div className='grid grid-cols-3 gap-10 my-8 h6'>
                <div className='col-span-1 flex gap-4'>
                  <i>
                    <FaWolfPackBattalion size={100} />
                  </i>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi, quisquam accusantium fugit eaque error quidem. Enim,
                    laudantium inventore.
                  </p>
                </div>
                <div className='col-span-1 flex gap-4'>
                  <i>
                    <FaWolfPackBattalion size={100} />
                  </i>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi, quisquam accusantium fugit eaque error quidem. Enim,
                    laudantium inventore.
                  </p>
                </div>
                <div className='col-span-1 flex gap-4'>
                  <i>
                    <FaWolfPackBattalion size={100} />
                  </i>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi, quisquam accusantium fugit eaque error quidem. Enim,
                    laudantium inventore.
                  </p>
                </div>
                <div className='col-span-1 flex gap-4'>
                  <i>
                    <FaWolfPackBattalion size={100} />
                  </i>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi, quisquam accusantium fugit eaque error quidem. Enim,
                    laudantium inventore.
                  </p>
                </div>
                <div className='col-span-1 flex gap-4'>
                  <i>
                    <FaWolfPackBattalion size={100} />
                  </i>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi, quisquam accusantium fugit eaque error quidem. Enim,
                    laudantium inventore.
                  </p>
                </div>
                <div className='col-span-1 flex gap-4'>
                  <i>
                    <FaWolfPackBattalion size={100} />
                  </i>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi, quisquam accusantium fugit eaque error quidem. Enim,
                    laudantium inventore.
                  </p>
                </div>
                <div className='col-span-1 flex gap-4'>
                  <i>
                    <FaWolfPackBattalion size={100} />
                  </i>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi, quisquam accusantium fugit eaque error quidem. Enim,
                    laudantium inventore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
      <ButtonGradient />
    </>
  )
}

export default RulesLoup
