import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Section from '../components/Section'
import { FaCircleCheck, FaSpinner } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import ButtonGradient from '../assets/svg/ButtonGradient'
import wilayasData from '../constants/wilaya.json'
import emailjs from 'emailjs-com'
import { useCart } from '../context/CartContext'

const Checkout = () => {
  const { cartItems, removeFromCart } = useCart()
  const [isOrderSuccessful, setIsOrderSuccessful] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const calculateTotal = (products) => {
    const subtotal = products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    )
    const delivery = 400
    const total = subtotal + delivery
    return { subtotal, delivery, total }
  }

  const onSubmit = (data) => {
    setIsLoading(true)
    const { subtotal, delivery, total } = calculateTotal(products)
    const emailData = {
      ...data,
      cartItems: cartItems.map((product) => ({
        name: product.name,
        quantity: product.quantity,
        price: product.price,
        total: product.price * product.quantity,
      })),
      subtotal,
      delivery,
      total,
      cartItemsHtml: cartItems
        .map(
          (product) =>
            `<tr>
      <td>${product.name}</td>
      <td>${product.quantity}</td>
      <td>${product.price} <sup className=''><small>DA<small/></sup></td>
    </tr>`
        )
        .join(''),
    }

    console.log('Email Data:', emailData)

    emailjs
      .send(
        'service_513ik5l',
        'template_8mw6v8p',
        emailData,
        'waN5fDK_pi2m7mNk7'
      )
      .then(
        (response) => {
          setIsOrderSuccessful(true)
          setIsLoading(false)
        },
        (error) => {
          setIsLoading(false)
        }
      )
  }

  return (
    <>
      <Section
        className='pt-[8rem] container min-h-screen mb-20'
        crosses
        crossesOffset='lg:translate-y-[5.25rem]'
        customPaddings
      >
        <h1 className='h1 text-center mb-10'>Submit Order</h1>
        <div className='flex flex-col gap-10 sm:flex-row '>
          {isOrderSuccessful ? (
            <div className='w-full min-h-[450px] border p-4 rounded-xl flex flex-col justify-center items-center gap-6'>
              <FaCircleCheck color='green' size={80} />
              <h2 className='font-manrope font-bold text-4xl leading-10 text-center uppercase'>
                Order completed successfully
              </h2>
              <p className='font-normal text-lg leading-8 text-gray-500 text-center uppercase'>
                Thank you!
              </p>
              <button className='border border-[#F17A28] p-2 rounded bg-[#F17A28] hover:opacity-75'>
                <Link to='/shop'>Go Back to shop</Link>
              </button>
            </div>
          ) : (
            <form
              className='w-full border p-4 rounded-xl'
              onSubmit={handleSubmit(onSubmit)}
            >
              <h2 className='text-2xl font-semibold mb-4 text-center'>
                Checkout
              </h2>

              <div className='mb-4'>
                <label
                  className='block mb-2 text-sm font-medium'
                  htmlFor='name'
                >
                  Name<span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  id='name'
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-3 border rounded-md bg-white focus:border-white ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  placeholder='Enter Name'
                />
                {errors.name && (
                  <p className='text-red-500 text-sm'>{errors.name.message}</p>
                )}
              </div>

              <div className='mb-4'>
                <label
                  className='block mb-2 text-sm font-medium'
                  htmlFor='email'
                >
                  Email<span className='text-red-500'>*</span>
                </label>
                <input
                  type='email'
                  id='email'
                  {...register('email', { required: 'Email is required' })}
                  className={`w-full px-4 py-3 border rounded-md bg-white focus:border-white ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder='Enter Email'
                />
                {errors.email && (
                  <p className='text-red-500 text-sm'>{errors.email.message}</p>
                )}
              </div>

              <div className='mb-4'>
                <label
                  className='block mb-2 text-sm font-medium'
                  htmlFor='mobileNumber'
                >
                  Mobile Number<span className='text-red-500'>*</span>
                </label>
                <input
                  type='tel'
                  id='mobileNumber'
                  {...register('mobileNumber', {
                    required: 'Mobile Number is required',
                    pattern: {
                      value: /^(05|06|07)[0-9]{8}$/,
                      message: 'Invalid mobile number format',
                    },
                  })}
                  className={`w-full px-4 py-3 border rounded-md bg-white focus:border-white ${
                    errors.mobileNumber ? 'border-red-500' : ''
                  }`}
                  placeholder='Enter Mobile Number'
                />
                {errors.mobileNumber && (
                  <p className='text-red-500 text-sm'>
                    {errors.mobileNumber.message}
                  </p>
                )}
              </div>

              <div className='mb-4'>
                <label
                  className='block mb-2 text-sm font-medium'
                  htmlFor='wilaya'
                >
                  Wilaya<span className='text-red-500'>*</span>
                </label>
                <select
                  id='wilaya'
                  {...register('wilaya', { required: 'Wilaya is required' })}
                  defaultValue=''
                  className={`px-3 py-3 border rounded-md bg-white text-gray-500 focus:border-white ${
                    errors.wilaya ? 'border-red-500' : ''
                  }`}
                >
                  <option value='' disabled>
                    Select a wilaya
                  </option>
                  {wilayasData.wilayas.map((wilaya, index) => (
                    <option key={index} value={wilaya}>
                      {wilaya}
                    </option>
                  ))}
                </select>
                {errors.wilaya && (
                  <p className='text-red-500 text-sm'>
                    {errors.wilaya.message}
                  </p>
                )}
              </div>

              <div className='mb-4'>
                <label
                  className='block mb-2 text-sm font-medium'
                  htmlFor='method'
                >
                  Shipping Method<span className='text-red-500'>*</span>
                </label>
                <select
                  id='method'
                  {...register('method', {
                    required: 'Shipping Method is required',
                  })}
                  defaultValue=''
                  className={`px-3 py-3 border rounded-md bg-white text-gray-500 focus:border-white ${
                    errors.method ? 'border-red-500' : ''
                  }`}
                >
                  <option value='' disabled>
                    Select a shipping method
                  </option>
                  <option value='Desk'>Desk</option>
                  <option value='Home'>Home</option>
                </select>
                {errors.method && (
                  <p className='text-red-500 text-sm'>
                    {errors.method.message}
                  </p>
                )}
              </div>

              <button
                type='submit'
                className='w-full py-3 bg-[#F17A28] text-white font-semibold rounded-md hover:opacity-75'
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? (
                  <div className='flex items-center justify-center space-x-2'>
                    <FaSpinner className='animate-spin' />
                    <span>Loading...</span>
                  </div>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          )}
          <div className='w-full h-[590px] border p-4 rounded-xl'>
            <h2 className='text-2xl font-semibold mb-4 text-center'>Cart</h2>
            <div className='mt-8'>
              <div className='flow-root'>
                <ul
                  role='list'
                  className='-my-6 divide-y divide-gray-200 max-h-[400px] overflow-y-auto'
                >
                  {cartItems.map((product) => (
                    <li key={product.id} className='flex py-6'>
                      <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                        <img
                          loading='lazy'
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className='h-full w-full object-cover object-center'
                        />
                      </div>

                      <div className='ml-4 flex flex-1 flex-col'>
                        <div>
                          <div className='flex justify-between text-base font-medium '>
                            <h3>{product.name}</h3>
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
                          <p className='text-gray-500'>
                            Qty x{product.quantity}
                          </p>

                          <div className='flex'>
                            <button
                              type='button'
                              className='font-medium text-red-500 hover:text-red-300'
                              onClick={() => removeFromCart(product.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className='border-t border-gray-200 px-4 py-6 sm:px-6 mt-10'>
                  <div className='flex justify-between text-base font-medium '>
                    <p>Subtotal</p>
                    <p>
                      3500
                      <small className='ml-1'>
                        <sup>DA </sup>
                      </small>
                    </p>
                  </div>
                  <div className='flex justify-between text-base font-medium '>
                    <p>Delivery</p>
                    <p>
                      400
                      <small className='ml-1'>
                        <sup>DA </sup>
                      </small>
                    </p>
                  </div>
                  <hr />
                  <div className='flex justify-between text-base font-medium '>
                    <p>Total</p>
                    <p>
                      3900
                      <small className='ml-1'>
                        <sup>DA </sup>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <ButtonGradient />
    </>
  )
}

export default Checkout
