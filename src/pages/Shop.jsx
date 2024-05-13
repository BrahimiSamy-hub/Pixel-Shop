import React, { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Section from '../components/Section'
import shirt1 from '../assets/shirt.jpg'
import ButtonGradient from '../assets/svg/ButtonGradient'
import Cart from '../components/Cart'
import { useCart } from '../context/CartContext' // Adjust path as necessary
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const products = [
  // Assuming each product has a unique ID
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: shirt1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2500',
    dimension: '60x40',
    stock: false,
  },
  {
    id: 2,
    name: 'Classic Tee',
    href: '#',
    imageSrc: shirt1,
    imageAlt: "Front of men's Classic Tee in black.",
    price: '3000',
    dimension: '60x40',
    stock: false,
  },
  {
    id: 3,
    name: 'Classic Tee',
    href: '#',
    imageSrc: shirt1,
    imageAlt: "Front of men's Classic Tee in black.",
    price: '3000',
    dimension: '60x40',
    stock: true,
  },
  {
    id: 4,
    name: 'Classic Tee',
    href: '#',
    imageSrc: shirt1,
    imageAlt: "Front of men's Classic Tee in black.",
    price: '3000',
    dimension: '60x40',
    stock: false,
  },
  {
    id: 5,
    name: 'Classic Tee',
    href: '#',
    imageSrc: shirt1,
    imageAlt: "Front of men's Classic Tee in black.",
    price: '3000',
    dimension: '60x40',
    stock: true,
  },
  {
    id: 6,
    name: 'Classic Tee',
    href: '#',
    imageSrc: shirt1,
    imageAlt: "Front of men's Classic Tee in black.",
    price: '3000',
    dimension: '60x40',
    stock: false,
  },
  {
    id: 7,
    name: 'Classic Tee',
    href: '#',
    imageSrc: shirt1,
    imageAlt: "Front of men's Classic Tee in black.",
    price: '3000',
    dimension: '60x40',
    stock: true,
  },

  {
    id: 8,
    name: 'Premium Tee',
    href: '#',
    imageSrc: shirt1,
    imageAlt: "Front of men's Premium Tee in black.",
    price: '3500',
    dimension: '60x40',
    stock: true,
  },
]
const Shop = ({ openCart, setOpenCart }) => {
  const [open, setOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const { isOpen, toggleCart } = useCart() // Use the context
  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setOpen(true)
  }

  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Section
          className='pt-[8rem] -mt-[5.25rem]'
          crosses
          crossesOffset='lg:translate-y-[5.25rem]'
          customPaddings
        >
          <div className='container relative'>
            <div className='mx-auto max-w-2xl px-4 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8'>
              <h2 className='text-2xl font-bold tracking-tight '>Our Shop</h2>
              <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8'>
                {products.map((product) => (
                  <div key={product.id} className='group relative'>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-60 border border-[#f18a28] '>
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className='h-full w-full object-fill object-center lg:h-full lg:w-full'
                      />
                    </div>
                    <div className='mt-4 flex justify-between'>
                      <div>
                        <h3 className='text-sm'>
                          <button onClick={() => handleProductClick(product)}>
                            <span
                              aria-hidden='true'
                              className='absolute inset-0'
                            />
                            {product.name}
                          </button>
                        </h3>
                        <div className='flex justify-between'>
                          <p className='mt-1 text-sm '>{product.dimension}</p>
                        </div>
                      </div>
                      <div className='flex flex-col'>
                        <p className='text-sm font-medium text-right'>
                          {product.price}
                          <small>
                            <sup>DA</sup>
                          </small>
                        </p>
                        <p
                          className={`text-sm ${
                            product.stock ? 'text-green-500' : 'text-red-500'
                          }`}
                        >
                          {product.stock ? 'In Stock' : 'Out of Stock'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
        <Footer />
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog className='relative z-10' onClose={() => setOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 hidden transition-opacity md:block' />
          </Transition.Child>
          <div className='fixed inset-0 z-10 w-screen overflow-y-auto mt-24'>
            <div className='flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
                enterTo='opacity-100 translate-y-0 md:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 md:scale-100'
                leaveTo='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
              >
                <Dialog.Panel className='flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl'>
                  <div className='relative flex w-full items-center overflow-hidden bg-n-7 px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8'>
                    <button
                      type='button'
                      className='absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8'
                      onClick={() => setOpen(false)}
                    >
                      <span className='sr-only'>Close</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                    <div className='grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8'>
                      <div className='aspect-h-3 aspect-w-2 overflow-hidden rounded-lg sm:col-span-4 lg:col-span-5'>
                        <img
                          src={selectedProduct.imageSrc}
                          alt={selectedProduct.imageAlt}
                          className='object-fill w-full '
                          loading='lazy'
                        />
                      </div>
                      <div className='sm:col-span-8 lg:col-span-7'>
                        <h2 className='text-2xl font-bold sm:pr-12'>
                          {selectedProduct.name}
                        </h2>
                        <p className='text-2xl'>{selectedProduct.price}</p>
                        <button
                          type='submit'
                          className='mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                        >
                          Add to bag
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* <Transition.Root show={isOpen} as={Fragment}>
        <Dialog className='relative z-50' onClose={toggleCart}>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 ' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-hidden '>
            <div className='absolute inset-0 overflow-hidden '>
              <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 '>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'
                >
                  <Dialog.Panel className='pointer-events-auto w-screen max-w-md  '>
                    <div className='flex h-full flex-col overflow-y-scroll bg-n-7 shadow-xl '>
                      <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6 '>
                        <div className='flex items-start justify-between '>
                          <Dialog.Title className='text-lg font-medium  '>
                            Shopping cart
                          </Dialog.Title>
                          <div className='ml-3 flex h-7 items-center'>
                            <button
                              type='button'
                              className='relative -m-2 p-2 text-gray-400 hover:text-gray-500'
                              onClick={() => setOpenCart(false)}
                            >
                              <span className='absolute -inset-0.5' />
                              <span className='sr-only'>Close panel</span>
                              <XMarkIcon
                                className='h-6 w-6'
                                aria-hidden='true'
                              />
                            </button>
                          </div>
                        </div>

                        <div className='mt-8'>
                          <div className='flow-root'>
                            <ul
                              role='list'
                              className='-my-6 divide-y divide-gray-200'
                            >
                              {products.map((product) => (
                                <li key={product.id} className='flex py-6'>
                                  <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                                    <img
                                      src={product.imageSrc}
                                      alt={product.imageAlt}
                                      className='h-full w-full object-cover object-center'
                                    />
                                  </div>

                                  <div className='ml-4 flex flex-1 flex-col'>
                                    <div>
                                      <div className='flex justify-between text-base font-medium '>
                                        <h3>
                                          <a href={product.href}>
                                            {product.name}
                                          </a>
                                        </h3>
                                        <p className='ml-4'>
                                          {product.price}
                                          <small>
                                            <sup>DA</sup>
                                          </small>
                                        </p>
                                      </div>
                                      <p className='mt-1 text-sm text-gray-500'>
                                        {product.dimension}
                                      </p>
                                    </div>
                                    <div className='flex flex-1 items-end justify-between text-sm'>
                                      <p className='text-gray-500'>Qty x5</p>

                                      <div className='flex'>
                                        <button
                                          type='button'
                                          className='font-medium text-red-500 hover:text-red-300'
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                        <div className='flex justify-between text-base font-medium '>
                          <p>Subtotal</p>
                          <p>$262.00</p>
                        </div>
                        <p className='mt-0.5 text-sm text-gray-500'>
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className='mt-6'>
                          <a
                            href='#'
                            className='flex items-center justify-center rounded-md border border-transparent bg-dimension-1 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                          >
                            Checkout
                          </a>
                        </div>
                        <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                          <p>
                            or{' '}
                            <button
                              type='button'
                              className='font-medium text-dimension-1  hover:text-indigo-500'
                              onClick={() => setOpenCart(false)}
                            >
                              Continue Shopping
                              <span aria-hidden='true'> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root> */}
      <ButtonGradient />
    </>
  )
}

export default Shop
