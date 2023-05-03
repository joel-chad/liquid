import Image from 'next/image'
import dynamic from 'next/dynamic'
import Tabs from '../components/Tabs'

const Carousel = dynamic(() => import("../components/Carousel"), { ssr: false });

export default function App() {
  return (
    <main className="min-h-scren">
      <div className='h-1/5'>
        <Carousel/>
      </div>
      <div className='px-32 bg-green-300 py-4 lg:px-44'>
        <h2 className='text-base'>Welcome</h2>
        <h2 className=' text-2xl font-semibold'>GreenSales Investments</h2>
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Voluptatem omnis, veniam quia numquam, animi sapiente,
          voluptate placeat tempore odit non asperiores itaque?
         Molestias sit dicta minus quaerat commodi laborum debitis,
          quam quis odit voluptatum libero sequi consequuntur enim eum asperiores!
           Ab deleniti doloremque ex eos est, esse dolores? Esse iure iusto, in
            quam corporis aliquid ea ad ipsum odit hic consequuntur expedita cupiditate provident?
            </p>
            {/* <div className='flex flex-col'> */}
            <button className="text-white bg-green-500 mb-4 hover:bg-white text-sm border-green-500 font-semibold border px-4 py-2 rounded-lg hover:text-green-600 hover:border-green-600">About Us</button> <br />
            <button className="text-white bg-green-500 hover:bg-white text-sm border-green-500 font-semibold border px-4 py-2 rounded-lg hover:text-green-600 hover:border-green-600">Download Our Catalog</button>

            {/* </div> */}
      </div>
      <div className='px-32 py-4 lg:px-44'>
      <h2 className=' text-2xl font-semibold'>What We Offer</h2>
        <Tabs/>
      </div>
        
       </main>
  )
}
