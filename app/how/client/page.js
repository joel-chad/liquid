import SectionTitle from "@/components/SectionTitle";
import TimeLine from "@/components/TImeLine";
import instructions from '../../../constants/instructions'

function Client() {
    return ( 
        <main className="flex flex-col">
            <div className='bg-[#92D050] p-12'>
            <SectionTitle
                pretitle="How To Become a Partner"
                title="These are the programs available for you"
                text='white'>
                    This is a basic description of what 
                    it entails.
            </SectionTitle>
            <div className='flex justify-center items-center'>
            <button className="text-white bg-[#00A651] hover:bg-white text-sm font-semibold border px-4 py-2 rounded-lg border-green-600 hover:text-[#00A651] hover:border-green-600">Download The Instructions</button>
            </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 63"><path d="M800,0H0V6.35A1552.85,1552.85,0,0,0,401,59,1553.47,1553.47,0,0,0,800,6.89Z" fill="#92D050"/></svg>      
            <TimeLine
                terms={instructions.terms}
                instruction={instructions.instruction}
                options={instructions.options}
                benefits={instructions.benefits}
                information={instructions.information}
                title={instructions.title}
                pretitle={instructions.pretitle}
             />
        </main>
     );
}

export default Client;