import Image from 'next/image'
import FAQ from '../../components/FAQ'
import SectionTitle from '@/components/SectionTitle'
import PreviewCard from '@/components/PreviewCard'
import Blog from '@/components/Blog'
import PopupWidget from '@/components/PopupWidget'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className='bg-green-300 p-12'>
      <SectionTitle
        pretitle="About"
        title="GreenSales Investments">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Voluptatem omnis, veniam quia numquam, animi sapiente,
          voluptate placeat tempore odit non asperiores itaque?
         Molestias sit dicta minus quaerat commodi laborum debitis.
      </SectionTitle>
      <div className='flex justify-center items-center'>
      <button className="text-white bg-green-500 hover:bg-white text-sm font-semibold border px-4 py-2 rounded-lg border-green-600 hover:text-green-600 hover:border-green-600">Download Our Catalog</button>
      </div>
      </div>
        <PreviewCard/>
          
            <div className=' px-32 lg:px-44'>
            <SectionTitle
        pretitle="FAQ"
        title="Frequently Asked Questions">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Voluptatem omnis, veniam quia numquam, animi sapiente
      </SectionTitle>
              <FAQ/>
          <Blog/>
            </div>
            <PopupWidget/>
          </main>
  )
}
