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
          <div className='container relative'>
            <div className='flex gap-40'>
              <h1 className='h1 uppercase w-[700px]'>
                Les Loups-Garous De Thiercelieux
              </h1>
              <h1 className='h1 uppercase'>Werwolf</h1>
            </div>
            <p className='uppercase h5 my-8'>
              Jeu de Cartes Werwolf contient
              <span className='text-[#F17A28]'> 50 cartes waterproof </span>
              (38 roles differents)
            </p>
            <hr />
            <div className='mt-8'>
              <h2 className='h2 uppercase mb-8'>Les Régles du jeu</h2>
              <p className='h6 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                consectetur nobis fuga veniam odit maxime quos, delectus ab?
                Debitis laudantium libero laborum culpa officia provident natus
                unde ad? Magni, maiores?
              </p>
            </div>
            <div className='mt-8'>
              <h2 className='h2 uppercase mb-8'>Roles</h2>
              <p className='h6 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                consectetur nobis fuga veniam odit maxime quos, delectus ab?
                Debitis laudantium libero laborum culpa officia provident natus
                unde ad? Magni, maiores?
              </p>
            </div>
          </div>
        </Section>
      </div>
      <ButtonGradient />
    </>
  )
}

export default RulesLoup
