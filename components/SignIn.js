'use client'

export default function SignIn() {
    return (
      <main className="flex flex-col py-32 w-2/4 bg-white rounded-tl-md rounded-br-md shadow-md justify-center lg:p-10">
        {/* <h1 className=''>Personal Details</h1> */}
        {/* <label htmlFor="name">First Name</label> */}
        <h3 className="font-semibold text-center py-3">Sign In</h3>

        <label htmlFor="name" className="text-sm text-gray-600 mx-4">{" "} Email</label>
        <input type="text" className="font-light w-5/6 rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-green-500"/>

        <label htmlFor="name" className="text-sm my-2 text-gray-600 mx-4">{" "} Password</label>
        <input type="password" className="font-light w-5/6 rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-green-500"/>

        <div className="flex justify-center items-center">
         <button className="text-gray-800 w-2/5 m-4 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-[#00A651] hover:border-green-600">Next</button>
        </div>
      </main>
    )
  }