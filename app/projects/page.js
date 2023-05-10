import ProjectCard from "@/components/ProjectCard";
import Movie from '../../components/Card'
import SectionTitle from "@/components/SectionTitle";
import Blog from "@/components/Blog";
import PopupWidget from "@/components/PopupWidget";

export default async function App() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  )
  const res = await data.json()
    return (
      <>
      <div className='bg-[#92D050] p-12'>
      <SectionTitle
        pretitle="Products"
        title="GreenSales Investments">
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

      <div className="grid gap-8 grid-cols-fluid p-8">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
        </div>
        <Blog/>
        <PopupWidget/>
       </>
    )
  }
