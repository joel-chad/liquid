import Image from 'next/image'
import Accordion from '../../components/Accordion'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
          <div className=' bg-green-300 py-4 px-32 lg:px-44'>
              <h2 className=' text-2xl font-semibold'>About GreenSales Investments</h2>
            <p className='p-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem omnis, veniam quia numquam, animi sapiente,
                voluptate placeat tempore odit non asperiores itaque?
              Molestias sit dicta minus quaerat commodi laborum debitis,
                quam quis odit voluptatum libero sequi consequuntur enim eum asperiores!
                Ab deleniti doloremque ex eos est, esse dolores? Esse iure iusto?
                  </p>
                  {/* <div className='flex flex-col'> */}
                  <button className="text-white bg-green-500 hover:bg-white text-sm font-semibold border px-4 py-2 rounded-lg border-green-600 hover:text-green-600 hover:border-green-600">Download Our Catalog</button>

                  {/* </div> */}
            </div>
            <div className=' px-32 lg:px-44'>
            <div className='py-4'>
              <h2 className='font-semibold'>Our Services</h2>
              <h3 className='font-medium'>1. Day Old Chickens</h3>
              <p className='p-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem omnis, veniam quia numquam, animi sapiente,
                voluptate placeat tempore odit non asperiores itaque?
                  </p>
              <h3 className='font-medium'>2. Sales</h3>
              <p className='p-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem omnis.
              Molestias sit dicta minus quaerat commodi laborum debitis,
                quam quis odit voluptatum libero sequi consequuntur enim eum asperiores!
                Ab deleniti doloremque ex eos est, esse dolores? Esse iure iusto?
                  </p>
              <h3 className='font-medium'>3. Commercial</h3>
              <p className='p-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem omnis, veniam quia numquam, animi sapiente,
                voluptate placeat tempore odit non asperiores itaque?
              Molestias sit dicta minus quaerat commodi laborum debitis?
                  </p>
            </div>
            <div>
            <h2 className=' text-2xl font-semibold'>FAQ</h2>

              <Accordion/>
            </div>
            </div>
          </main>
  )
}
