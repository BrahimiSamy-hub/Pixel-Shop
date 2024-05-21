// import { useLocation } from 'react-router-dom'
// import { disablePageScroll, enablePageScroll } from 'scroll-lock'
// import { Link } from 'react-router-dom'

// import { brainwave, logo, logowhite } from '../assets'
// import { navigation } from '../constants'
// import Button from './Button'
// import MenuSvg from '../assets/svg/MenuSvg'
// import { HamburgerMenu } from './design/Header'
// import { useState } from 'react'

// const Header = () => {
//   const { pathname } = useLocation()
//   const [openNavigation, setOpenNavigation] = useState(false)

//   const toggleNavigation = () => {
//     if (openNavigation) {
//       setOpenNavigation(false)
//       enablePageScroll()
//     } else {
//       setOpenNavigation(true)
//       disablePageScroll()
//     }
//   }

//   const handleClick = () => {
//     if (!openNavigation) return

//     enablePageScroll()
//     setOpenNavigation(false)
//   }

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full z-40 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
//         openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
//       }`}
//     >
//       <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-2'>
//         <Link className='block w-[12rem] xl:mr-8' to='/'>
//           <img
//             src={logowhite}
//             alt='Pixel'
//             className='w-[150px]'
//             loading='lazy'
//           />
//         </Link>
//         <nav
//           className={`${
//             openNavigation ? 'flex' : 'hidden'
//           } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
//         >
//           <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
//             {navigation.map((item) => (
//               <Link
//                 key={item.id}
//                 to={item.url}
//                 onClick={handleClick}
//                 className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
//                   item.onlyMobile ? 'lg:hidden' : ''
//                 } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
//                   item.url === pathname ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'
//                 } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
//               >
//                 {item.title}
//               </Link>
//             ))}
//             <div>
//               <Link to='/shop'>
//                 <Button className='flex lg:hidden mt-6'>Shop</Button>
//               </Link>
//               <span className='lg:hidden ml-6'>cart</span>
//             </div>
//           </div>

//           <HamburgerMenu />
//         </nav>
//         {/* <Link to='#signup' className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'>
//           New account
//         </Link> */}

//         <Link to='/shop'>
//           <Button className='hidden lg:flex'>Shop</Button>
//         </Link>
//         <button className='ml-6 mr-2 hidden lg:flex' onClick={}>cart</button>
//         <Button
//           className='ml-auto lg:hidden'
//           px='px-3'
//           onClick={toggleNavigation}
//         >
//           <MenuSvg openNavigation={openNavigation} />
//         </Button>
//       </div>
//     </div>
//   )
// }

// export default Header

import { brainwave, logo, logowhite } from '../assets'
import { FaCartShopping } from 'react-icons/fa6'
import { navigation } from '../constants'
import { HamburgerMenu } from './design/Header'
import { useLocation } from 'react-router-dom'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import Button from './Button'
import MenuSvg from '../assets/svg/MenuSvg'
import Cart from './Cart'

const Header = () => {
  const { isOpen, toggleCart } = useCart()
  const { pathname } = useLocation()
  const [openNavigation, setOpenNavigation] = useState(false)

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false)
      enablePageScroll()
    } else {
      setOpenNavigation(true)
      disablePageScroll()
    }
  }

  const handleClick = () => {
    if (!openNavigation) return
    enablePageScroll()
    setOpenNavigation(false)
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
      }`}
    >
      <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-2'>
        <Link className='block w-[12rem] xl:mr-8' to='/'>
          <img
            src={logowhite}
            alt='Pixel'
            className='w-[150px]'
            loading='lazy'
          />
        </Link>
        <nav
          className={`${
            openNavigation ? 'flex' : 'hidden'
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:pr-20'>
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? 'lg:hidden' : ''
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </Link>
            ))}

            {/* <Link to='/shop'>
                <Button className='flex lg:hidden mt-6'>Shop</Button>
              </Link> */}
            <Button className='lg:hidden ' onClick={toggleCart}>
              <FaCartShopping size={25} color='#F18A27' />
            </Button>
          </div>

          <HamburgerMenu />
        </nav>

        {/* <Link to='/shop'>
          <Button className='hidden lg:flex'>Shop</Button>
        </Link> */}
        {/* <button className='ml-6 mr-2 hidden lg:flex' onClick={toggleCart}>
          <FaCartShopping size={50} color='#F18A27' />
        </button> */}
        {/* <Button className='lg:hidden ' onClick={toggleCart}>
          <FaCartShopping size={25} color='#F18A27' />
        </Button> */}
        <button
          className='ml-6 mr-2 relative hidden lg:flex'
          onClick={toggleCart}
        >
          <FaCartShopping size={50} color='#F18A27' />
          <span className='absolute -top-2 -right-3 flex items-center justify-center w-6 h-6 font-bold text-[#F18A28] bg-white rounded-full'>
            0
          </span>
        </button>
        <Button className='ml-auto lg:hidden' onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
      {/* <Cart /> */}
    </div>
  )
}

export default Header
