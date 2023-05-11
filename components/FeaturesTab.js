import Image from 'next/image'
import chicken from '../public/chicken.png'


export default function App() {
  return (
    <section className="relative py-3 lg:py-5 overflow-hidden">
  <div className="lg:container px-4 mx-auto">
    <div className="max-w-3xl mx-auto text-center">
      <span className="inline-block py-1 px-3 mb-1 text-xs font-semibold text-green-900 bg-orange-50 rounded-full">What we do</span>
      <h2 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-24">
        <span>This is what we do </span>
        <span className="font-serif italic">features</span>
      </h2>
    </div>
    <div className="max-w-7xl mx-auto">
      <div className="flex flex- -mx-4 items-center">
        <div className="w-full lg:w-2/5 xl:w-auto px-4 lg:pb-10 mb-16 lg:mb-0">
          <div className="mx-auto max-w-sm">
            <div className="flex border items-center pb-6 mb-6 border-b border-gray-100">
              <div className="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-blue-100 rounded-full">
                <img src="saturn-assets/images/features/icon-element.svg" alt=""/>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Training</h3>
                <span className="text-sm text-gray-600">We train on the best practices of chicken rearing</span>
              </div>
            </div>
            <div className="flex items-center border pb-6 mb-6 border-b border-gray-100">
              <div className="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-orange-100 rounded-full">
                <img src="saturn-assets/images/features/icon-hierarchy.svg" alt=""/>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Inputs</h3>
                <span className="text-sm text-gray-600">Be part of the ZIHUKU CHICKEN REARING PROGRAM and receive chicks and feed</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-gray-300 rounded-full">
                <img src="saturn-assets/images/features/icon-school-bag.svg" alt=""/>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Assistance</h3>
                <span className="text-sm text-gray-600">Get a dedicated extension officer for support during a project.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/5 xl:w-auto mx-auto px-4 xl:-mr-10 mb-16 lg:mb-0">
          <Image className="block h-80 md:h-100 lg:h-auto xl:h-150 mx-auto" src={chicken} alt=""/>
        </div>
        <div className="w-full lg:w-2/5 xl:w-auto px-4 lg:pb-10">
          <div className="mx-auto max-w-sm">
            <div className="flex items-center pb-6 mb-6 border-b border-gray-100">
              <div className="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-red-200 rounded-full">
                <img src="saturn-assets/images/features/icon-robot.svg" alt=""/>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Entity</h3>
                <span className="text-sm text-gray-600">Register your shop as an agent and earn money</span>
              </div>
            </div>
            <div className="flex items-center pb-6 mb-6 border-b border-gray-100">
              <div className="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-yellow-200 rounded-full">
                <img src="saturn-assets/images/features/icon-cam.svg" alt=""/>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Agency</h3>
                <span className="text-sm text-gray-600">Become an expert and become a ZIHUKU REARING PROGRAM agent</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-green-200 rounded-full">
                <img src="saturn-assets/images/features/icon-flask.svg" alt=""/>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Unlimited Support</h3>
                <span className="text-sm text-gray-600">No worries, we are here to support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
