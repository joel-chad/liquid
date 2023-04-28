import Image from 'next/image'
import dynamic from 'next/dynamic'

const Carousel = dynamic(() => import("../components/Carousel"), { ssr: false });

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Carousel/>
    </main>
  )
}
