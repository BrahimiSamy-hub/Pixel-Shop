import ButtonGradient from '../assets/svg/ButtonGradient'
import Section from '../components/Section'
import PricingList from '../components/PricingList'
import Footer from '../components/Footer'
import Header from '../components/Header'
import check from '../assets/check.svg'
import Details from '../components/PricingDetails'
const Pricing = () => {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Section
          className='pt-[12rem] -mt-[5.25rem]'
          crosses
          crossesOffset='lg:translate-y-[5.25rem]'
          customPaddings
        >
          <div className='container'>
            <PricingList />
          </div>
          {/* <Details /> */}
        </Section>

        <Footer />
      </div>

      <ButtonGradient />
    </>
  )
}

export default Pricing
