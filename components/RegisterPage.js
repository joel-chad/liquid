'use client'

function RegisterPage() {
    
    return ( 
        <div className="bg-green-500 shadow-md rounded-md flex flex-row">
            <div className="w-1/2 p-8 text-center">
                <p className="p-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Natus explicabo voluptatibus ratione veritatis velit sed est tempora!</p>
                <button className="py-3 px-6 bg-transparent rounded-md text-center text-gray-700 text-xl font-bold uppercase ring-2 ring-white active:scale-110 transition-transform ease-in">
                    Register as Client
                </button>
            </div>
            <div className="w-1/2 p-8 text-center">
                <p className="p-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Natus explicabo voluptatibus ratione veritatis velit sed est tempora!</p>
                <button className="py-3 px-6 bg-transparent rounded-md text-center text-gray-700 text-xl font-bold uppercase ring-2 ring-white active:scale-110 transition-transform ease-in">
                    Register as Agent
                </button>
            </div>
        </div>
     );
}

export default RegisterPage;