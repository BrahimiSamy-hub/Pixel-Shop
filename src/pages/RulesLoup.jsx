import Section from '../components/Section'
import ButtonGradient from '../assets/svg/ButtonGradient'

const RulesLoup = () => {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Section
          className='pt-[8rem] -mt-[5.25rem] min-h-screen'
          crosses
          crossesOffset='lg:translate-y-[5.25rem]'
          customPaddings
        >
          <div className='container relative '>
            <h1 className='h1'>Rules</h1>
          </div>
        </Section>
      </div>
      <ButtonGradient />
    </>
  )
}

export default RulesLoup
