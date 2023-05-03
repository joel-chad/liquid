import ProjectCard from "@/components/ProjectCard";
import Movie from '../../components/Card'

export default async function App() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  )
  const res = await data.json()
    return (
      <>
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
       </>
    )
  }
