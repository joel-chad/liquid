import Image from 'next/image'
import FAQ from '../../components/FAQ'
import SectionTitle from '@/components/SectionTitle'
import PreviewCard from '@/components/PreviewCard'
import Blog from '@/components/Blog'
import PopupWidget from '@/components/PopupWidget'

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className='bg-[#92D050] p-12'>
      <SectionTitle
        pretitle="About"
        title="GreenSales Investments"
        text='white'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Voluptatem omnis, veniam quia numquam, animi sapiente,
          voluptate placeat tempore odit non asperiores itaque?
         Molestias sit dicta minus quaerat commodi laborum debitis.
      </SectionTitle>
      <div className='flex justify-center items-center'>
      <button className="text-white bg-[#00A651] hover:bg-white text-sm font-semibold border px-4 py-2 rounded-lg border-green-600 hover:text-[#00A651] hover:border-green-600">Download Our Catalog</button>
      </div>
      
     
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 63"><path d="M800,0H0V6.35A1552.85,1552.85,0,0,0,401,59,1553.47,1553.47,0,0,0,800,6.89Z" fill="#92D050"/></svg>      
        <PreviewCard/>
          
            <div className='lg:px-44'>
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
