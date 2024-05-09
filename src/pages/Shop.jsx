import ButtonGradient from '../assets/svg/ButtonGradient'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Section from '../components/Section'
const Shop = () => {
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
          <div className='container relative mt-10'>
            <h1 className='h-screen '> Shop </h1>
          </div>
        </Section>

        <Footer />
      </div>

      <ButtonGradient />
    </>
  )
}

export default Shop
