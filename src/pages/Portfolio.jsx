import React, { useState } from 'react'
import Section from '../components/Section'
import PortfolioPhoto from '../components/PortfolioPhoto'
import PortfolioDesign from '../components/PortfolioDesign'
import PortfolioVideo from '../components/PortfolioVideo'
import PortfolioNeon from '../components/PortfolioNeon'
import PortfolioWebsite from '../components/PortfolioWebsite'
import ButtonGradient from '../assets/svg/ButtonGradient'

const subcategories = {
  VisualIdentity: [
    'Logo',
    'Visit Cards',
    'Sac',
    'Habillage',
    'T-shirt',
    'Flyer',
  ],
  GraphicDesign: ['Books', 'Menu', 'Social Media Posts'],
  Design: ['Voix Off', 'Reel', 'Cinématographie', 'Spot Publicitaire'],
  Packaging: ['Etiquette', 'Emballage'],
  Photo: ['Shooting', 'Product'],
  Apps: ['Web App', 'App Mobile', 'Gestionaire'],
  Printing: [
    'Tableaux',
    'Wall',
    'Certificat / Invitation',
    'Rollup',
    'Vitrine',
    'Frigo',
  ],
  Weeding: ['E-commerce', 'Blogs', 'Portfolios'],
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('GraphicDesign')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')

  const renderCategoryComponent = () => {
    switch (selectedCategory) {
      case 'GraphicDesign':
        return <PortfolioPhoto />
      case 'VisualIdentity':
        return <PortfolioVideo />
      case 'Design':
        return <PortfolioDesign />
      case 'Packaging':
        return <PortfolioNeon />
      case 'Apps':
        return <PortfolioWebsite />
      case 'Photo':
        return <PortfolioPhoto />
      case 'Printing':
        return <PortfolioDesign />
      case 'Weeding':
        return <PortfolioWebsite />
      default:
        return <PortfolioPhoto />
    }
  }

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
            <h1 className='h1 text-center'>Portfolio</h1>
            <ul className='flex justify-around gap-15 my-8 overflow-auto '>
              {[
                'GraphicDesign',
                'VisualIdentity',
                'Design',
                'Packaging',
                'Apps',
                'Photo',
                'Weeding',
                'Printing',
              ].map((category) => (
                <li
                  key={category}
                  className={`border p-2 rounded-3xl text-center ${
                    selectedCategory === category ? 'bg-[#F17A28]' : ''
                  } hover:cursor-pointer`}
                  onClick={() => {
                    setSelectedCategory(category)
                    setSelectedSubcategory('')
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
            <ul className='flex justify-around gap-10 my-4 overflow-auto items-center'>
              {subcategories[selectedCategory].map((subcategory) => (
                <li
                  key={subcategory}
                  className={`border p-2 rounded-3xl text-center ${
                    selectedSubcategory === subcategory ? 'bg-[#F17A28]' : ''
                  } hover:cursor-pointer`}
                  onClick={() => setSelectedSubcategory(subcategory)}
                >
                  {subcategory}
                </li>
              ))}
            </ul>

            {renderCategoryComponent()}
          </div>
        </Section>
      </div>
      <ButtonGradient />
    </>
  )
}

export default Portfolio
