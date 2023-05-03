import Link from "next/link"
import Image from "next/image"

export default function Card({ title, release_date, poster_path, id }) {
  const imagePath = "https://image.tmdb.org/t/p/original"
  return (
    <div className=" bg-white px-3 pb-2 shadow-md rounded-sm">
      <h2 className="text-lg font-medium pt-4">{title}</h2>
      <h2 className=" text-sm">{release_date}</h2>
      <Link className="pb-2" href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={600}
          height={600}
          alt={title}
          priority
        />
      </Link>
      <Link className="py-2" href={`/${id}`}>Read More...</Link>
    </div>
  )
}