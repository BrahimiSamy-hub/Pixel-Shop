// import { useState, useRef, useEffect } from 'react'
// import Section from '../components/Section'
// import ButtonGradient from '../assets/svg/ButtonGradient'
// import PortfolioPhoto from '../components/PortfolioPhoto'
// import PortfolioDesign from '../components/PortfolioDesign'
// import PortfolioVideo from '../components/PortfolioVideo'
// import PortfolioNeon from '../components/PortfolioNeon'
// import PortfolioEcommerce from '../components/portfolio/E-commerce'
// import PortfolioGestionaire from '../components/portfolio/Gestionaire'
// import PortfolioMobileApp from '../components/portfolio/MobileApp'
// import PortfolioWebsite from '../components/portfolio/WebSite'
// import PortfolioReel from '../components/portfolio/Reel'
// import PortfolioCinématographie from '../components/portfolio/Cinématographie'
// import PortfolioSpot from '../components/portfolio/Spot'
// import PortfolioEtiquette from '../components/portfolio/Etiquette'
// import PortfolioEmballage from '../components/portfolio/Emballage'
// import PortfolioShooting from '../components/portfolio/Shooting'
// import PortfolioProduct from '../components/portfolio/Product'
// import PortfolioTableaux from '../components/portfolio/Tableaux'
// import PortfolioWall from '../components/portfolio/Wall'
// import PortfolioCertificat from '../components/portfolio/Certificat'
// import PortfolioVitrine from '../components/portfolio/Vitrine'
// import PortfolioFrigo from '../components/portfolio/Frigo'
// import PortfolioBooks from '../components/portfolio/Books'
// import PortfolioMenu from '../components/portfolio/Menu'
// import PortfolioPosts from '../components/portfolio/Posts'
// import PortfolioLogo from '../components/portfolio/Logo'
// import PortfolioCards from '../components/portfolio/Cards'
// import PortfolioSac from '../components/portfolio/Sac'
// import PortfolioTshirts from '../components/portfolio/Frigo'
// import PortfolioFlyer from '../components/portfolio/Flyer'

// const subcategoryComponents = {
//   Logo: PortfolioLogo,
//   'Visit Cards': PortfolioCards,
//   Sac: PortfolioSac,
//   Habillage: PortfolioTshirts,
//   'T-shirt': PortfolioTshirts,
//   Flyer: PortfolioFlyer,
//   Books: PortfolioBooks,
//   Menu: PortfolioMenu,
//   'Social Media Posts': PortfolioPosts,
//   'Voix Off': PortfolioWebsite,
//   Reel: PortfolioReel,
//   Cinématographie: PortfolioCinématographie,
//   'Spot Publicitaire': PortfolioSpot,
//   Etiquette: PortfolioEtiquette,
//   Emballage: PortfolioEmballage,
//   Shooting: PortfolioShooting,
//   Product: PortfolioProduct,
//   'Web App': PortfolioWebsite,
//   'App Mobile': PortfolioMobileApp,
//   Gestionaire: PortfolioGestionaire,
//   Tableaux: PortfolioTableaux,
//   Wall: PortfolioWall,
//   'Certificat / Invitation': PortfolioCertificat,
//   Vitrine: PortfolioVitrine,
//   Frigo: PortfolioFrigo,
//   'E-commerce': PortfolioEcommerce,
//   Blogs: PortfolioEcommerce,
//   Portfolios: PortfolioEcommerce,
// }

// const subcategories = {
//   VisualIdentity: [
//     'Logo',
//     'Visit Cards',
//     'Sac',
//     'Habillage',
//     'T-shirt',
//     'Flyer',
//   ],
//   GraphicDesign: ['Books', 'Menu', 'Social Media Posts'],
//   Video: ['Voix Off', 'Reel', 'Cinématographie', 'Spot Publicitaire'],
//   Packaging: ['Etiquette', 'Emballage'],
//   Photo: ['Shooting', 'Product'],
//   Apps: ['Web App', 'App Mobile', 'Gestionaire', 'E-commerce'],
//   Printing: ['Tableaux', 'Wall', 'Certificat / Invitation', 'Vitrine', 'Frigo'],
//   Weeding: ['E-commerce', 'Blogs', 'Portfolios'],
// }

// const Portfolio = () => {
//   const [selectedCategory, setSelectedCategory] = useState('GraphicDesign')
//   const [selectedSubcategory, setSelectedSubcategory] = useState(
//     subcategories['GraphicDesign'][0]
//   )
//   const [canScrollLeftCategory, setCanScrollLeftCategory] = useState(false)
//   const [canScrollRightCategory, setCanScrollRightCategory] = useState(true)
//   const [canScrollLeftSubcategory, setCanScrollLeftSubcategory] =
//     useState(false)
//   const [canScrollRightSubcategory, setCanScrollRightSubcategory] =
//     useState(true)
//   const categoryListRef = useRef(null)
//   const subcategoryListRef = useRef(null)

//   const checkScrollButtons = (ref, setCanScrollLeft, setCanScrollRight) => {
//     if (ref.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = ref.current
//       setCanScrollLeft(scrollLeft > 0)
//       setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
//     }
//   }

//   const scroll = (ref, direction, setCanScrollLeft, setCanScrollRight) => {
//     if (ref.current) {
//       ref.current.scrollBy({
//         top: 0,
//         left: direction === 'left' ? -200 : 200,
//         behavior: 'smooth',
//       })
//       setTimeout(
//         () => checkScrollButtons(ref, setCanScrollLeft, setCanScrollRight),
//         300
//       )
//     }
//   }

//   useEffect(() => {
//     setSelectedSubcategory(subcategories[selectedCategory][0])
//     checkScrollButtons(
//       categoryListRef,
//       setCanScrollLeftCategory,
//       setCanScrollRightCategory
//     )
//   }, [selectedCategory])

//   useEffect(() => {
//     checkScrollButtons(
//       subcategoryListRef,
//       setCanScrollLeftSubcategory,
//       setCanScrollRightSubcategory
//     )
//   }, [selectedSubcategory])

//   const renderSubcategoryComponent = () => {
//     const SubcategoryComponent = subcategoryComponents[selectedSubcategory]
//     return SubcategoryComponent ? <SubcategoryComponent /> : null
//   }

//   return (
//     <>
//       <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
//         <Section
//           className='pt-[8rem] -mt-[5.25rem] min-h-screen'
//           crosses
//           crossesOffset='lg:translate-y-[5.25rem]'
//           customPaddings
//         >
//           <div className='container relative'>
//             <h1 className='h1 text-center'>Portfolio</h1>
//             <div className='relative'>
//               <button
//                 className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#F17A28] p-2 rounded-full block lg:hidden ${
//                   !canScrollLeftCategory ? 'opacity-50 cursor-not-allowed' : ''
//                 }`}
//                 onClick={() =>
//                   scroll(
//                     categoryListRef,
//                     'left',
//                     setCanScrollLeftCategory,
//                     setCanScrollRightCategory
//                   )
//                 }
//                 disabled={!canScrollLeftCategory}
//               >
//                 &lt;
//               </button>
//               <ul
//                 ref={categoryListRef}
//                 className='flex justify-around gap-15 my-8 mx-8 overflow-hidden'
//               >
//                 {[
//                   'GraphicDesign',
//                   'VisualIdentity',
//                   'Video',
//                   'Packaging',
//                   'Apps',
//                   'Photo',
//                   'Weeding',
//                   'Printing',
//                 ].map((category) => (
//                   <li
//                     key={category}
//                     className={`border border-n-5 p-2 rounded-lg text-center ${
//                       selectedCategory === category ? 'bg-[#F17A28]' : ''
//                     } hover:cursor-pointer`}
//                     onClick={() => {
//                       setSelectedCategory(category)
//                     }}
//                   >
//                     {category}
//                   </li>
//                 ))}
//               </ul>
//               <button
//                 className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#F17A28] p-2 rounded-full block lg:hidden ${
//                   !canScrollRightCategory ? 'opacity-50 cursor-not-allowed' : ''
//                 }`}
//                 onClick={() =>
//                   scroll(
//                     categoryListRef,
//                     'right',
//                     setCanScrollLeftCategory,
//                     setCanScrollRightCategory
//                   )
//                 }
//                 disabled={!canScrollRightCategory}
//               >
//                 &gt;
//               </button>
//             </div>
//             <div className='relative'>
//               <button
//                 className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#F17A28] p-2 rounded-full block lg:hidden ${
//                   !canScrollLeftSubcategory
//                     ? 'opacity-50 cursor-not-allowed'
//                     : ''
//                 }`}
//                 onClick={() =>
//                   scroll(
//                     subcategoryListRef,
//                     'left',
//                     setCanScrollLeftSubcategory,
//                     setCanScrollRightSubcategory
//                   )
//                 }
//                 disabled={!canScrollLeftSubcategory}
//               >
//                 &lt;
//               </button>
//               <ul
//                 ref={subcategoryListRef}
//                 className='flex justify-around gap-10 my-4 mx-8 overflow-hidden items-center'
//               >
//                 {subcategories[selectedCategory].map((subcategory) => (
//                   <li
//                     key={subcategory}
//                     className={`border border-n-5 p-2 rounded-lg text-center ${
//                       selectedSubcategory === subcategory ? 'bg-[#F17A28]' : ''
//                     } hover:cursor-pointer`}
//                     onClick={() => setSelectedSubcategory(subcategory)}
//                   >
//                     {subcategory}
//                   </li>
//                 ))}
//               </ul>
//               <button
//                 className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#F17A28] p-2 rounded-full block lg:hidden ${
//                   !canScrollRightSubcategory
//                     ? 'opacity-50 cursor-not-allowed'
//                     : ''
//                 }`}
//                 onClick={() =>
//                   scroll(
//                     subcategoryListRef,
//                     'right',
//                     setCanScrollLeftSubcategory,
//                     setCanScrollRightSubcategory
//                   )
//                 }
//                 disabled={!canScrollRightSubcategory}
//               >
//                 &gt;
//               </button>
//             </div>

//             {renderSubcategoryComponent()}
//           </div>
//         </Section>
//       </div>
//       <ButtonGradient />
//     </>
//   )
// }

// export default Portfolio

import { useState, useRef, useEffect } from 'react'
import Section from '../components/Section'
import ButtonGradient from '../assets/svg/ButtonGradient'
import PortfolioEcommerce from '../components/portfolio/E-commerce'
import PortfolioGestionaire from '../components/portfolio/Gestionaire'
import PortfolioMobileApp from '../components/portfolio/MobileApp'
import PortfolioWebsite from '../components/portfolio/WebSite'
import PortfolioReel from '../components/portfolio/Reel'
import PortfolioCinématographie from '../components/portfolio/Cinématographie'
import PortfolioSpot from '../components/portfolio/Spot'
import PortfolioEtiquette from '../components/portfolio/Etiquette'
import PortfolioEmballage from '../components/portfolio/Emballage'
import PortfolioShooting from '../components/portfolio/Shooting'
import PortfolioProduct from '../components/portfolio/Product'
import PortfolioTableaux from '../components/portfolio/Tableaux'
import PortfolioWall from '../components/portfolio/Wall'
import PortfolioCertificat from '../components/portfolio/Certificat'
import PortfolioVitrine from '../components/portfolio/Vitrine'
import PortfolioFrigo from '../components/portfolio/Frigo'
import PortfolioBooks from '../components/portfolio/Books'
import PortfolioMenu from '../components/portfolio/Menu'
import PortfolioPosts from '../components/portfolio/Posts'
import PortfolioLogo from '../components/portfolio/Logo'
import PortfolioCards from '../components/portfolio/Cards'
import PortfolioSac from '../components/portfolio/Sac'
import PortfolioTshirts from '../components/portfolio/Frigo'
import PortfolioFlyer from '../components/portfolio/Flyer'

const subcategoryComponents = {
  Logo: PortfolioLogo,
  'Visit Cards': PortfolioCards,
  Sac: PortfolioSac,
  Habillage: PortfolioTshirts,
  'T-shirt': PortfolioTshirts,
  Flyer: PortfolioFlyer,
  Books: PortfolioBooks,
  Menu: PortfolioMenu,
  'Social Media Posts': PortfolioPosts,
  'Voix Off': PortfolioWebsite,
  Reel: PortfolioReel,
  Cinématographie: PortfolioCinématographie,
  'Spot Publicitaire': PortfolioSpot,
  Etiquette: PortfolioEtiquette,
  Emballage: PortfolioEmballage,
  Shooting: PortfolioShooting,
  Product: PortfolioProduct,
  'Web App': PortfolioWebsite,
  'App Mobile': PortfolioMobileApp,
  Gestionaire: PortfolioGestionaire,
  Tableaux: PortfolioTableaux,
  Wall: PortfolioWall,
  'Certificat / Invitation': PortfolioCertificat,
  Vitrine: PortfolioVitrine,
  Frigo: PortfolioFrigo,
  'E-commerce': PortfolioEcommerce,
  Blogs: PortfolioEcommerce,
  Portfolios: PortfolioEcommerce,
}

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
  Video: ['Voix Off', 'Reel', 'Cinématographie', 'Spot Publicitaire'],
  Photo: ['Shooting', 'Product'],
  Packaging: ['Etiquette', 'Emballage'],
  Apps: ['Web App', 'App Mobile', 'Gestionaire', 'E-commerce'],
  Printing: ['Tableaux', 'Wall', 'Certificat / Invitation', 'Vitrine', 'Frigo'],
  Weeding: ['E-commerce', 'Blogs', 'Portfolios'],
}

const categoryDisplayNames = {
  GraphicDesign: 'Graphic Design',
  VisualIdentity: 'Visual Identity',
  Video: 'Video',
  Packaging: 'Packaging',
  Photo: 'Photo',
  Apps: 'Apps',
  Printing: 'Printing',
  Weeding: 'Weeding',
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('GraphicDesign')
  const [selectedSubcategory, setSelectedSubcategory] = useState(
    subcategories['GraphicDesign'][0]
  )
  const [canScrollLeftCategory, setCanScrollLeftCategory] = useState(false)
  const [canScrollRightCategory, setCanScrollRightCategory] = useState(true)
  const [canScrollLeftSubcategory, setCanScrollLeftSubcategory] =
    useState(false)
  const [canScrollRightSubcategory, setCanScrollRightSubcategory] =
    useState(true)
  const categoryListRef = useRef(null)
  const subcategoryListRef = useRef(null)

  const checkScrollButtons = (ref, setCanScrollLeft, setCanScrollRight) => {
    if (ref.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
  }

  const scroll = (ref, direction, setCanScrollLeft, setCanScrollRight) => {
    if (ref.current) {
      ref.current.scrollBy({
        top: 0,
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      })
      setTimeout(
        () => checkScrollButtons(ref, setCanScrollLeft, setCanScrollRight),
        300
      )
    }
  }

  useEffect(() => {
    setSelectedSubcategory(subcategories[selectedCategory][0])
    checkScrollButtons(
      categoryListRef,
      setCanScrollLeftCategory,
      setCanScrollRightCategory
    )
  }, [selectedCategory])

  useEffect(() => {
    checkScrollButtons(
      subcategoryListRef,
      setCanScrollLeftSubcategory,
      setCanScrollRightSubcategory
    )
  }, [selectedSubcategory])

  const renderSubcategoryComponent = () => {
    const SubcategoryComponent = subcategoryComponents[selectedSubcategory]
    return SubcategoryComponent ? <SubcategoryComponent /> : null
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
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#F17A28] p-2 rounded-full block lg:hidden ${
                  !canScrollLeftCategory ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() =>
                  scroll(
                    categoryListRef,
                    'left',
                    setCanScrollLeftCategory,
                    setCanScrollRightCategory
                  )
                }
                disabled={!canScrollLeftCategory}
              >
                &lt;
              </button>
              <ul
                ref={categoryListRef}
                className='flex justify-around gap-15 my-8 mx-8 overflow-hidden'
              >
                {Object.keys(subcategories).map((category) => (
                  <li
                    key={category}
                    className={`border border-n-5 p-2 rounded-lg text-center ${
                      selectedCategory === category ? 'bg-[#F17A28]' : ''
                    } hover:cursor-pointer`}
                    onClick={() => {
                      setSelectedCategory(category)
                    }}
                  >
                    {categoryDisplayNames[category] || category}
                  </li>
                ))}
              </ul>
              <button
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#F17A28] p-2 rounded-full block lg:hidden ${
                  !canScrollRightCategory ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() =>
                  scroll(
                    categoryListRef,
                    'right',
                    setCanScrollLeftCategory,
                    setCanScrollRightCategory
                  )
                }
                disabled={!canScrollRightCategory}
              >
                &gt;
              </button>
            </div>
            <div className='relative'>
              <button
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#F17A28] p-2 rounded-full block lg:hidden ${
                  !canScrollLeftSubcategory
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
                onClick={() =>
                  scroll(
                    subcategoryListRef,
                    'left',
                    setCanScrollLeftSubcategory,
                    setCanScrollRightSubcategory
                  )
                }
                disabled={!canScrollLeftSubcategory}
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
                    className={`border border-n-5 p-2 rounded-lg text-center ${
                      selectedSubcategory === subcategory ? 'bg-[#F17A28]' : ''
                    } hover:cursor-pointer`}
                    onClick={() => setSelectedSubcategory(subcategory)}
                  >
                    {subcategory}
                  </li>
                ))}
              </ul>
              <button
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#F17A28] p-2 rounded-full block lg:hidden ${
                  !canScrollRightSubcategory
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
                onClick={() =>
                  scroll(
                    subcategoryListRef,
                    'right',
                    setCanScrollLeftSubcategory,
                    setCanScrollRightSubcategory
                  )
                }
                disabled={!canScrollRightSubcategory}
              >
                &gt;
              </button>
            </div>

            {renderSubcategoryComponent()}
          </div>
        </Section>
      </div>
      <ButtonGradient />
    </>
  )
}

export default Portfolio
