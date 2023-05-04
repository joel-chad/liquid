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
      <div className='bg-green-300 p-12'>
      <SectionTitle
        pretitle="Products"
        title="GreenSales Investments">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Voluptatem omnis, veniam quia numquam, animi sapiente,
          voluptate placeat tempore odit non asperiores itaque?
         Molestias sit dicta minus quaerat commodi laborum debitis.
      </SectionTitle>
      <div className='flex justify-center items-center'>
      <button className="text-white bg-green-500 hover:bg-white text-sm font-semibold border px-4 py-2 rounded-lg border-green-600 hover:text-green-600 hover:border-green-600">Download Our Catalog</button>
      </div>
      </div>
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
