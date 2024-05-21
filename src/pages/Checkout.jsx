import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Section from '../components/Section'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaCircleCheck } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import shirt from '../assets/heros/america.png'
import ButtonGradient from '../assets/svg/ButtonGradient'

const products = [
  {
    id: 1,
    name: 'America',
    href: '#',
    quantity: '1',
    imageSrc: shirt,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '3000',
    color: 'Black',
  },
  {
    id: 1,
    name: 'America',
    href: '#',
    quantity: '2',
    imageSrc: shirt,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '3200',
    color: 'Black',
  },
]

const Checkout = () => {
  const [isOrderSuccessful, setIsOrderSuccessful] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    setIsOrderSuccessful(true)
    toast.success('Order completed successfully!')
  }

  return (
    <>
      <Section
        className='pt-[8rem] container min-h-screen mb-20'
        crosses
        crossesOffset='lg:translate-y-[5.25rem]'
        customPaddings
      >
        <h1 className='h1 text-center mb-10'> Submit Order</h1>
        <div className='flex flex-col gap-10 sm:flex-row '>
          {isOrderSuccessful ? (
            <div className='w-full min-h-[450px] border p-4 rounded-xl flex flex-col justify-center items-center gap-6'>
              <FaCircleCheck color='green' size={80} />
              <h2 className='font-manrope font-bold text-4xl leading-10  text-center uppercase'>
                Order completed successfully
              </h2>
              <p className='font-normal text-lg leading-8 text-gray-500  text-center uppercase'>
                Thank you!
              </p>
              <button className='border border-[#F17A28] p-2 rounded bg-[#F17A28] hover:opacity-75'>
                <Link to='/shop'> Go Back to shop</Link>
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
                  className={`w-full px-4 py-3 border rounded-md focus:border-white ${
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
                  className={`w-full px-4 py-3 border rounded-md focus:border-white ${
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
                  htmlFor='city'
                >
                  City<span className='text-red-500'>*</span>
                </label>
                <select
                  id='city'
                  {...register('city', { required: 'City is required' })}
                  defaultValue=''
                  className={`px-3 py-3 border rounded-md focus:border-white ${
                    errors.city ? 'border-red-500' : ''
                  }`}
                >
                  <option value='' disabled>
                    Select a city
                  </option>
                  <option value='City1'>City1</option>
                  <option value='City2'>City2</option>
                  <option value='City3'>City3</option>
                </select>
                {errors.city && (
                  <p className='text-red-500 text-sm'>{errors.city.message}</p>
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
                  className={`px-3 py-3 border rounded-md focus:border-white ${
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
              >
                Submit
              </button>
            </form>
          )}
          <div className='w-full h-[498px] border p-4 rounded-xl'>
            <h2 className='text-2xl font-semibold mb-4 text-center'>Cart</h2>
            <div className='mt-8'>
              <div className='flow-root'>
                <ul
                  role='list'
                  className='-my-6 divide-y divide-gray-200 min-h-[320px] overflow-y-auto'
                >
                  {products.map((product) => (
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
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </>
  )
}

export default Checkout
