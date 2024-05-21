import { useState } from 'react'
import Section from '../components/Section'
import ButtonGradient from '../assets/svg/ButtonGradient'
import SingleProduct from '../components/SingleProduct'
import { products } from '../constants/index'

const Shop = () => {
  const [open, setOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setOpen(true)
  }

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
              <h2 className='text-right'>{products.length} Product(s) Found</h2>
              <div className='flex gap-44'>
                <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className='group relative'
                      data-aos='fade-up'
                    >
                      <div className='overflow-hidden lg:aspect-none group-hover:opacity-75 bg-[#c9c9c9] h-[280px] min-w-[280px] border border-[#F17A28] rounded'>
                        {product.new && (
                          <span className='absolute top-0 left-0  bg-red-500 text-white text-xs font-bold  px-2 py-1 animate-pulse rounded-br-full'>
                            NEW
                          </span>
                        )}
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className='h-full w-full object-cover object-center lg:h-full lg:w-full rounded'
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

      <SingleProduct open={open} setOpen={setOpen} product={selectedProduct} />

      <ButtonGradient />
    </>
  )
}

export default Shop
