'use client'

export default function PersonalDetails() {
    return (
      <main className="flex flex-col w-2/4 bg-white rounded-tl-md rounded-br-md shadow-md justify-center lg:p-10">
        {/* <h1 className=''>Personal Details</h1> */}
        {/* <label htmlFor="name">First Name</label> */}
        <h3 className="font-semibold text-center py-3">Personal Details</h3>
        <label htmlFor="name" className="text-sm text-gray-600 mx-4">{" "} First Name</label>
        <input type="text" className="font-light w-5/6 rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-green-500"/>

        <label htmlFor="name" className="text-sm text-gray-600 mx-4">{" "} Last Name</label>
        <input type="text" className="font-light w-5/6 rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-green-500"/>

        <label htmlFor="name" className="text-sm text-gray-600 mx-4">{" "} Address</label>
        <input type="text" className="font-light w-5/6 rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-green-500"/>

        <label htmlFor="name" className="text-sm text-gray-600 mx-4">{" "} Phone Number</label>
        <input type="text" className="font-light w-5/6 rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-green-500"/>

        <label htmlFor="name" className="text-sm text-gray-600 mx-4">{" "} Email</label>
        <input type="text" className="font-light w-5/6 rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-green-500"/>

        <label htmlFor="name" className="text-sm text-gray-600 mx-4">{" "} ID Number</label>
        <input type="text" className="font-light w-5/6 rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-green-500"/>
      </main>
    )
  }