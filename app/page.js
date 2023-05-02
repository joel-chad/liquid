import Image from 'next/image'
import dynamic from 'next/dynamic'

const Carousel = dynamic(() => import("../components/Carousel"), { ssr: false });

export default function App() {
  return (
    <main className="min-h-scren">
      <div className='h-1/5'>
        <Carousel/>
      </div>
      <div className='text-center'>
        <h1>Lorem Ipsum</h1>
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Voluptatem omnis, veniam quia numquam, animi sapiente,
          voluptate placeat tempore odit non asperiores itaque?
         Molestias sit dicta minus quaerat commodi laborum debitis,
          quam quis odit voluptatum libero sequi consequuntur enim eum asperiores!
           Ab deleniti doloremque ex eos est, esse dolores? Esse iure iusto, in
            quam corporis aliquid ea ad ipsum odit hic consequuntur expedita cupiditate provident?
            </p>
      </div>
        
       </main>
  )
}
