import menu from '../assets/shirt1.png'
const PortfolioDesign = () => {
  return (
    <div className='grid grid-cols-4 gap-10'>
      <div className='flex justify-center  col-span-4 md:col-span-2 lg:col-span-1'>
        <img
          src={menu}
          alt=''
          className='object-cover w-full h-full border rounded-xl min-w-56 max-h-48 '
        />
      </div>
      <div className='flex justify-center col-span-4 md:col-span-2 lg:col-span-1'>
        <img
          src={menu}
          alt=''
          className='object-cover w-full h-full border rounded-xl min-w-56 max-h-48 '
        />
      </div>
      {/* <div className='flex justify-center col-span-4 md:col-span-2 lg:col-span-1'>
        <img
          src={menu}
          alt=''
          className='object-cover w-full h-full border rounded-xl min-w-56 max-h-48 '
        />
      </div>
      <div className='flex justify-center col-span-4 md:col-span-2 lg:col-span-1'>
        <img
          src={menu}
          alt=''
          className='object-cover w-full h-full border rounded-xl min-w-56 max-h-48 '
        />
      </div> */}
    </div>
  )
}

export default PortfolioDesign
