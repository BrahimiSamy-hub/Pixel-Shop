import React, { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useCart } from '../context/CartContext' // Adjust path as necessary
import shirt from '../assets/shirt1.png'

const products = [
  // Assuming each product has a unique ID
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: shirt,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2500',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Classic Tee',
    href: '#',
    imageSrc: shirt,
    imageAlt: "Front of men's Classic Tee in black.",
    price: '3000',
    color: 'Grey',
  },
  {
    id: 3,
    name: 'Classic Tee',
    href: '#',
    imageSrc: shirt,
    imageAlt: "Front of men's Classic Tee in black.",
    price: '3000',
    color: 'Grey',
  },
  {
    id: 4,
    name: 'Classic Tee',
    href: '#',
    imageSrc: shirt,
    imageAlt: "Front of men's Classic Tee in black.",
    price: '3000',
    color: 'Grey',
  },
  {
    id: 5,
    name: 'Classic Tee',
    href: '#',
    imageSrc: shirt,
    imageAlt: "Front of men's Classic Tee in black.",
    price: '3000',
    color: 'Grey',
  },
  {
    id: 6,
    name: 'Classic Tee',
    href: '#',
    imageSrc: shirt,
    imageAlt: "Front of men's Classic Tee in black.",
    price: '3000',
    color: 'Grey',
  },
  {
    id: 7,
    name: 'Classic Tee',
    href: '#',
    imageSrc: shirt,
    imageAlt: "Front of men's Classic Tee in black.",
    price: '3000',
    color: 'Grey',
  },

  {
    id: 8,
    name: 'Premium Tee',
    href: '#',
    imageSrc: shirt,
    imageAlt: "Front of men's Premium Tee in black.",
    price: '3500',
    color: 'White',
  },
]

const cart = () => {
  const { isOpen, toggleCart } = useCart()

  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
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
                              onClick={toggleCart}
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
                                        {product.color}
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
                            className='flex items-center justify-center rounded-md border border-transparent bg-color-1 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                          >
                            Checkout
                          </a>
                        </div>
                        <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                          <p>
                            or{' '}
                            <button
                              type='button'
                              className='font-medium text-color-1  hover:text-indigo-500'
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
      </Transition.Root>
    </>
  )
}

export default cart
