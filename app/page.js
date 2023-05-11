import Image from 'next/image'
import dynamic from 'next/dynamic'
import SectionTitle from '@/components/SectionTitle';
import FeaturesTab from '@/components/FeaturesTab'
import Tabs from '../components/ContactBanner'
import PreviewCard from '@/components/PreviewCard';
import Cookies from '@/components/Cookies';
import Video from '@/components/Video';
import ContactTab from '@/components/ContactTab';
import PopupWidget from '@/components/PopupWidget';
import Blog from '@/components/Blog';

const Carousel = dynamic(() => import("../components/Carousel"), { ssr: false });

export default function App() {
  return (
    <main className="min-h-scren">
      <Carousel/>
      <SectionTitle
        pretitle="Welcome"
        title="Zihuku Chicken Rearing Program">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Voluptatem omnis, veniam quia numquam, animi sapiente,
          voluptate placeat tempore odit non asperiores itaque?
         Molestias sit dicta minus quaerat commodi laborum debitis.
      </SectionTitle>
      <FeaturesTab/>
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video /> */}
      <ContactTab/>
      <Blog/>
      <PopupWidget/>
    </main>
  )
}
