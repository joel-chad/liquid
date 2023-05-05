import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function PreviewCard(){
    return(
      <Container>
        <section className="py-12 bg-blueGray-50 overflow-hidden">
          <div className="container px-4 mx-auto">
          <SectionTitle
        pretitle="What We Offer"
        title="Our Products">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Voluptatem omnis, veniam quia numquam, animi sapiente,
          voluptate placeat tempore odit non asperiores itaque?
         Molestias sit dicta minus quaerat commodi laborum debitis.
      </SectionTitle>
            <div className="md:max-w-6xl mx-auto">
              <div className="flex flex-wrap -m-3.5 mb-4">
                <div className="w- md:w-1/3 p-3.5">
                  <a href="#">
                    <div className="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
                      <img className="absolute left-0 top-0" src="flaro-assets/images/career/gradient.svg" alt=""/>
                      <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="mb-24 flex-1">
                          <h3 className="mb-2 text-lg font-bold font-heading leading-snug">1. Day Old Chickens</h3>
                          <p className="text-sm text-gray-500 font-medium">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem omnis. Molestias sit dicta minus quaerat commodi laborum debitis, quam quis odit voluptatum libero sequi
                               consequuntur enim eum asperiores! Ab deleniti doloremque ex eos est, esse dolores? Esse iure iusto?</span>
                          </p>
                        </div>
                        <div className="flex-1">
                          <img src="flaro-assets/logos/brands/brand-medium.png" alt=""/>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="w- md:w-1/3 p-3.5">
                  <a href="#">
                    <div className="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
                      <img className="absolute left-0 top-0" src="flaro-assets/images/career/gradient.svg" alt=""/>
                      <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="mb-24 flex-1">
                          <h3 className="mb-2 text-lg font-bold font-heading leading-snug">2. Sales</h3>
                          <p className="text-sm text-gray-500 font-medium">
                            {/* <span className="px-2">&bull;</span> */}
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem omnis. Molestias sit dicta minus quaerat commodi laborum debitis, quam quis odit voluptatum libero sequi consequuntur enim eum
                               asperiores! Ab deleniti doloremque ex eos est, esse dolores? Esse iure iusto?</span>
                          </p>
                        </div>
                        <div className="flex-1">
                          <img src="flaro-assets/logos/brands/brand-medium2.png" alt=""/>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="w- md:w-1/3 p-3.5">
                  <a href="#">
                    <div className="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
                      <img className="absolute left-0 top-0" src="flaro-assets/images/career/gradient.svg" alt=""/>
                      <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="mb-24 flex-1">
                          <h3 className="mb-2 text-lg font-bold font-heading leading-snug">3. Commercial</h3>
                          <p className="text-sm text-gray-500 font-medium">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem omnis, veniam quia numquam, 
                              animi sapiente, voluptate placeat tempore odit non asperiores itaque?</span>
                          </p>
                        </div>
                        <div className="flex-1">
                          <img src="flaro-assets/logos/brands/brand-medium3.png" alt=""/>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <div className="w-full md:w-1/3 p-3.5">
                  <a href="#">
                    <div className="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
                      <img className="absolute left-0 top-0" src="flaro-assets/images/career/gradient.svg" alt=""/>
                      <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="mb-24 flex-1">
                          <h3 className="mb-2 text-lg font-bold font-heading leading-snug">Senior Software Developer</h3>
                          <p className="text-sm text-gray-500 font-medium">
                            <span>Full Time</span>
                            <span className="px-2">&bull;</span>
                            <span>New York, USA</span>
                          </p>
                        </div>
                        <div className="flex-1">
                          <img src="flaro-assets/logos/brands/brand-medium4.png" alt=""/>
                        </div>
                      </div>
                    </div>
                  </a>
                </div> */}
                {/* <div className="w-full md:w-1/3 p-3.5">
                  <a href="#">
                    <div className="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl shadow-9xl">
                      <img className="absolute left-0 top-0" src="flaro-assets/images/career/gradient.svg" alt=""/>
                      <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="mb-24 flex-1">
                          <h3 className="mb-2 text-lg font-bold font-heading leading-snug">Product Designer</h3>
                          <p className="text-sm text-gray-500 font-medium">
                            <span>Full Time</span>
                            <span className="px-2">&bull;</span>
                            <span>Remote</span>
                          </p>
                        </div>
                        <div className="flex-1">
                          <img src="flaro-assets/logos/brands/brand-medium5.png" alt=""/>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="w-full md:w-1/3 p-3.5">
                  <a href="#">
                    <div className="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
                      <img className="absolute left-0 top-0" src="flaro-assets/images/career/gradient.svg" alt=""/>
                      <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="mb-24 flex-1">
                          <h3 className="mb-2 text-lg font-bold font-heading leading-snug">Full-Stack Developer</h3>
                          <p className="text-sm text-gray-500 font-medium">
                            <span>Full Time</span>
                            <span className="px-2">&bull;</span>
                            <span>Texas, USA</span>
                          </p>
                        </div>
                        <div className="flex-1">
                          <img src="flaro-assets/logos/brands/brand-medium6.png" alt=""/>
                        </div>
                      </div>
                    </div>
                  </a>
                </div> */}
              </div>
              {/* <a className="flex justify-center items-center text-center font-semibold text-indigo-600 hover:text-indigo-700 leading-normal" href="#">
                <span className="mr-2.5">See all blogs</span>
                <svg width="17" height="16" viewbox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.83333 3.33337L14.5 8.00004M14.5 8.00004L9.83333 12.6667M14.5 8.00004L2.5 8.00004" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </a> */}
            </div>
          </div>
        </section>
        </Container>
    )
}