import React, { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition, RadioGroup } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Section from '../components/Section'
import ButtonGradient from '../assets/svg/ButtonGradient'

import thanos from '../assets/heros/heroes.jpg'
import side from '../assets/heros/heroes1.jpg'
import loup from '../assets/heros/loup.png'
import card from '../assets/cards/02.jpg'
import thanos1 from '../assets/heros/heroes2.jpg'
import thanos2 from '../assets/heros/heroes3.jpg'
import thanos3 from '../assets/heros/heroes4.jpg'
import thanos4 from '../assets/heros/heroes5.jpg'
import thanos5 from '../assets/heros/heroes6.jpg'
import thanos6 from '../assets/heros/heroes7.jpg'
import thanos7 from '../assets/heros/heroes8.jpg'
import thanos8 from '../assets/heros/heroes9.jpg'
import hero from '../assets/heros/1.png'
import hero1 from '../assets/heros/2.png'
import hero2 from '../assets/heros/3.png'
import hero3 from '../assets/heros/4.png'
import hero4 from '../assets/heros/5.png'
import hero5 from '../assets/heros/6.png'
import hero6 from '../assets/heros/7.png'
import hero7 from '../assets/heros/8.png'
import hero8 from '../assets/heros/9.jpg'
import hero9 from '../assets/heros/10.jpg'
import hero10 from '../assets/heros/11.png'
import hero11 from '../assets/heros/12.png'
import hero12 from '../assets/heros/13.png'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const products = [
  // Assuming each product has a unique ID
  {
    id: 1,
    name: 'Heroes',
    href: '#',
    imageSrc: thanos1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2500',
    heroes: [
      { imageSrc: hero, image: thanos1 },
      { imageSrc: hero1, image: thanos2 },
      { imageSrc: hero2, image: thanos3 },
      { imageSrc: hero3, image: thanos4 },
      { imageSrc: hero4, image: thanos5 },
      { imageSrc: hero5, image: thanos6 },
      { imageSrc: hero6, image: thanos7 },
      { imageSrc: hero7, image: thanos8 },
      { imageSrc: hero8, image: thanos },
      { imageSrc: hero9, image: thanos8 },
      { imageSrc: hero10, image: thanos8 },
      { imageSrc: hero11, image: thanos8 },
      { imageSrc: hero12, image: thanos8 },
    ],
    dimension: '60x40',
    stock: false,
    new: true,
    sizes: [
      { name: '60x40', inStock: true },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
    ],
  },
  {
    id: 2,
    name: 'Loup Garou',
    href: '#',
    imageSrc: loup,
    imageAlt: "Front of men's Classic Tee in black.",
    price: '3000',
    heroes: [],
    dimension: '60x40',
    stock: false,
    new: true,
    sizes: [
      { name: '60x40', inStock: true },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
    ],
  },
  {
    id: 3,
    name: 'Cards',
    href: '#',
    heroes: [
      { imageSrc: hero, image: thanos1 },
      { imageSrc: hero1, image: thanos2 },
      { imageSrc: hero2, image: thanos3 },
      { imageSrc: hero3, image: thanos4 },
      { imageSrc: hero4, image: thanos5 },
      { imageSrc: hero5, image: thanos6 },
      { imageSrc: hero6, image: thanos7 },
      { imageSrc: hero7, image: thanos8 },
      { imageSrc: hero8, image: thanos },
      { imageSrc: hero9, image: thanos8 },
      { imageSrc: hero10, image: thanos8 },
      { imageSrc: hero11, image: thanos8 },
      { imageSrc: hero12, image: thanos8 },
    ],
    imageSrc: card,
    imageAlt: "Front of men's Classic Tee in black.",
    price: '3000',
    dimension: '60x40',
    stock: false,
    new: true,
    sizes: [
      { name: '60x40', inStock: true },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
    ],
  },
]

const Shop = () => {
  const [open, setOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [mainImage, setMainImage] = useState(selectedProduct.imageSrc)

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setSelectedSize(
      product.sizes && product.sizes.length > 0
        ? product.sizes.find((size) => size.inStock)
        : null
    )
    setOpen(true)
  }

  useEffect(() => {
    if (selectedProduct) {
      setMainImage(selectedProduct.imageSrc)
    }
  }, [selectedProduct])

  const [selectedSize, setSelectedSize] = useState(
    products[0] && products[0].sizes && products[0].sizes.length > 0
      ? products[0].sizes.find((size) => size.inStock)
      : null
  )

  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Section
          className='pt-[8rem] -mt-[5.25rem]'
          crosses
          crossesOffset='lg:translate-y-[5.25rem]'
          customPaddings
        >
          <div className='container relative'>
            <div className='mx-auto max-w-2xl px-4 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8'>
              <h1 className=' h1'>Our Shop</h1>
              <h2 className='text-right'>{products.length} Product Found</h2>
              <div className='flex gap-44'>
                <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className='group relative'
                      data-aos='fade-up'
                    >
                      <div className='overflow-hidden lg:aspect-none group-hover:opacity-75 bg-white h-[280px] min-w-[280px] border border-[#F17A28] rounded'>
                        {product.new && (
                          <span className='absolute top-0 left-0  bg-red-500 text-white text-xs font-bold  px-2 py-1 animate-pulse rounded-br-full'>
                            NEW
                          </span>
                        )}
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className='h-full w-full object-contain object-center lg:h-full lg:w-full rounded'
                          loading='lazy'
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
          </div>
        </Section>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          className='relative z-10 rounded'
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 hidden transition-opacity md:block ' />
          </Transition.Child>
          <div className='fixed inset-0 z-10 w-screen overflow-y-auto mt-24 '>
            <div className='flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4 '>
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
                  <div className='relative flex w-full items-center overflow-hidden bg-n-7 px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 rounded'>
                    <button
                      type='button'
                      className='absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8'
                      onClick={() => setOpen(false)}
                    >
                      <span className='sr-only'>Close</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                    <div className='grid w-full grid-cols-1  gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8  '>
                      <div className='aspect-h-3 aspect-w-2 overflow-hidden sm:col-span-4 lg:col-span-5  '>
                        <div>
                          <h2 className='h3'>{selectedProduct.name}</h2>
                        </div>{' '}
                        <div className='flex flex-col justify-center h-full'>
                          <div>
                            <img
                              src={mainImage}
                              alt={selectedProduct.imageAlt}
                              className='object-fill w-full '
                              loading='lazy'
                            />
                            <div className='flex flex-row justify-center gap-10 mt-2  '>
                              <img
                                src={thanos}
                                alt={selectedProduct.imageAlt}
                                className='object-fill w-24 border border-[#F17A28] hover:cursor-pointer'
                                loading='lazy'
                                onClick={() => setMainImage(thanos)}
                              />
                              <img
                                src={side}
                                alt={selectedProduct.imageAlt}
                                className='object-fill w-24 border border-[#F17A28] hover:cursor-pointer'
                                loading='lazy'
                                onClick={() => setMainImage(side)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='sm:col-span-8 lg:col-span-7'>
                        <div className='mt-10'>
                          <div className='flex items-center justify-between '>
                            <h4 className='text-sm font-medium '>
                              Choose a hero
                            </h4>
                          </div>
                          <div className='flex flex-col'>
                            <RadioGroup
                              value={selectedSize}
                              onChange={setSelectedSize}
                              className='mt-4'
                            >
                              <div className='grid grid-cols-6 gap-4'>
                                {selectedProduct.heroes.map((hero, index) => (
                                  <img
                                    key={index}
                                    src={hero.imageSrc}
                                    alt=''
                                    className='rounded border hover:cursor-pointer '
                                    onClick={() => {
                                      setMainImage(hero.image)
                                    }}
                                  />
                                ))}
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                        <div className='mt-10'>
                          <div className='flex items-center justify-between'>
                            <h4 className='text-sm font-medium '>Size</h4>
                          </div>
                          <RadioGroup
                            value={selectedSize}
                            onChange={setSelectedSize}
                            className='mt-4'
                          >
                            <RadioGroup.Label className='sr-only'>
                              Choose a size
                            </RadioGroup.Label>
                            <div className='grid grid-cols-4 gap-4'>
                              {selectedProduct.sizes.map((size) => (
                                <RadioGroup.Option
                                  key={size.name}
                                  value={size}
                                  disabled={!size.inStock}
                                  className={({ active }) =>
                                    classNames(
                                      size.inStock
                                        ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                        : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                      active ? 'ring-2 ring-[#f17a28]' : '',
                                      'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                    )
                                  }
                                >
                                  {({ active, checked }) => (
                                    <>
                                      <RadioGroup.Label as='span'>
                                        {size.name}
                                      </RadioGroup.Label>
                                      {size.inStock ? (
                                        <span
                                          className={classNames(
                                            active ? 'border' : 'border-2',
                                            checked
                                              ? 'border-[#f17a28]'
                                              : 'border-transparent',
                                            'pointer-events-none absolute -inset-px rounded-md'
                                          )}
                                          aria-hidden='true'
                                        />
                                      ) : (
                                        <span
                                          aria-hidden='true'
                                          className='pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200'
                                        >
                                          <svg
                                            className='absolute inset-0 h-full w-full stroke-2 text-gray-200'
                                            viewBox='0 0 100 100'
                                            preserveAspectRatio='none'
                                            stroke='currentColor'
                                          >
                                            <line
                                              x1={0}
                                              y1={100}
                                              x2={100}
                                              y2={0}
                                              vectorEffect='non-scaling-stroke'
                                            />
                                          </svg>
                                        </span>
                                      )}
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                          <h2 className='h2 text-[#F17A28] mt-4 '>
                            {selectedProduct.price}
                            <small>
                              <sup>DA</sup>
                            </small>
                          </h2>
                        </div>

                        <button
                          type='submit'
                          className='mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-[#f17A28] px-8 py-3 text-base font-medium text-white hover:opacity-75 '
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

      <ButtonGradient />
    </>
  )
}

export default Shop
