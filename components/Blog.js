'use client'

import Container from "./Container"

export default function Blog(){
    return(
        <Container>
        <section className="relative py-20 overflow-hidden">
  <img className="absolute top-0 right-0 xl:mt-10 -mr-24 lg:-mr-0" src="saturn-assets/images/blog/star-circle-right.svg" alt=""/>
  <img className="hidden sm:block   absolute bottom-0 left-0 -mb-48 lg:mb-0" src="saturn-assets/images/blog/blue-light-left.png" alt=""/>
  <div className="relative container px-4 mx-auto">
    <div className="max-w-2xl mx-auto mb-15 text-center">
      <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-green-900 bg-green-50 rounded-full">OUR BLOG</span>
      <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold">
        <span>News &amp;</span>
        <span className="font-serif italic"> Articles</span>
      </h1>
    </div>
    <div className="max-w-5xl mx-auto">
      <div className="py-12 border-t-2 border-gray-100">
        <div className="flex flex-wrap lg:flex-nowrap items-center">
          <div className="w-full lg:w-auto px-4 mb-8 lg:mb-0">
            <img className="block w-44 h-30" src="saturn-assets/images/blog/image-blog-small-2.png" alt=""/>
          </div>
          <div className="w-full lg:w-9/12 px-4 mb-10 lg:mb-0">
            <div className="max-w-2xl">
              <span className="block text-gray-400 mb-1">Jul 20, 2022</span>
              <p className="text-2xl font-semibold text-gray-900">Consectures Dummy Content Velit officia consequat duis enim velit mollit adipsing</p>
            </div>
          </div>
          <div className="w-full lg:w-auto px-4 ml-auto text-right">
            <a className="inline-flex items-center text-xl font-semibold text-green-900 hover:text-gray-900" href="#">
              <span className="mr-2">Read</span>
              <svg className="animate-bounce" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.33301 14.6668L14.6663 1.3335" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M1.33301 1.3335H14.6663V14.6668" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="py-12 border-t-2 border-gray-100">
        <div className="flex flex-wrap lg:flex-nowrap items-center">
          <div className="w-full lg:w-auto px-4 mb-8 lg:mb-0">
            <img className="block w-44 h-30" src="saturn-assets/images/blog/image-blog-small-3.png" alt=""/>
          </div>
          <div className="w-full lg:w-9/12 px-4 mb-10 lg:mb-0">
            <div className="max-w-2xl">
              <span className="block text-gray-400 mb-1">Jul 20, 2022</span>
              <p className="text-2xl font-semibold text-gray-900">Consectures Dummy Content Velit officia consequat duis enim velit mollit adipsing</p>
            </div>
          </div>
          <div className="w-full lg:w-auto px-4 ml-auto text-right">
            <a className="inline-flex items-center text-xl font-semibold text-green-900 hover:text-gray-900" href="#">
              <span className="mr-2">Read</span>
              <svg className="animate-bounce" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.33301 14.6668L14.6663 1.3335" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M1.33301 1.3335H14.6663V14.6668" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="py-12 border-t-2 border-gray-100">
        <div className="flex flex-wrap lg:flex-nowrap items-center">
          <div className="w-full lg:w-auto px-4 mb-8 lg:mb-0">
            <img className="block w-44 h-30" src="saturn-assets/images/blog/image-blog-small-1.png" alt=""/>
          </div>
          <div className="w-full lg:w-9/12 px-4 mb-10 lg:mb-0">
            <div className="max-w-2xl">
              <span className="block text-gray-400 mb-1">Jul 20, 2022</span>
              <p className="text-2xl font-semibold text-gray-900">Consectures Dummy Content Velit officia consequat duis enim velit mollit adipsing</p>
            </div>
          </div>
          <div className="w-full lg:w-auto px-4 ml-auto text-right">
            <a className="inline-flex items-center text-xl font-semibold text-green-900 hover:text-gray-900" href="#">
              <span className="mr-2">Read</span>
              <svg className="animate-bounce" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.33301 14.6668L14.6663 1.3335" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M1.33301 1.3335H14.6663V14.6668" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
                    </div>
                    </div>
                </div>
                <div className="pt-12 border-t-2 border-gray-100 text-center">
                    <a className="relative group inline-block py-4 px-7 font-semibold text-green-900 hover:text-green-50 rounded-full bg-green-50 transition duration-300 overflow-hidden" href="#">
                    <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <span className="relative">See More Articles</span>
                    </a>
                </div>
                </div>
            </div>
            </section>
            </Container>
    )
}