import React, { useState, useRef } from 'react'
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
  const categoryListRef = useRef(null)
  const subcategoryListRef = useRef(null)

  const scroll = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({
        top: 0,
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      })
    }
  }

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
          <div className='container relative'>
            <h1 className='h1 text-center'>Portfolio</h1>
            <div className='relative'>
              <button
                className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#F17A28] p-2 rounded-full block lg:hidden'
                onClick={() => scroll(categoryListRef, 'left')}
              >
                &lt;
              </button>
              <ul
                ref={categoryListRef}
                className='flex justify-around gap-15 my-8 mx-8  overflow-hidden '
              >
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
                    className={`border p-2 rounded-lg text-center ${
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
              <button
                className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#F17A28] p-2 rounded-full block lg:hidden'
                onClick={() => scroll(categoryListRef, 'right')}
              >
                &gt;
              </button>
            </div>
            <div className='relative'>
              <button
                className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#F17A28] p-2 rounded-full block lg:hidden'
                onClick={() => scroll(subcategoryListRef, 'left')}
              >
                &lt;
              </button>
              <ul
                ref={subcategoryListRef}
                className='flex justify-around gap-10 my-4 mx-8 overflow-hidden items-center'
              >
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
              <button
                className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#F17A28] p-2 rounded-full block lg:hidden'
                onClick={() => scroll(subcategoryListRef, 'right')}
              >
                &gt;
              </button>
            </div>

            {renderCategoryComponent()}
          </div>
        </Section>
      </div>
      <ButtonGradient />
    </>
  )
}

export default Portfolio
