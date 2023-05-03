import Link from "next/link"
import Image from "next/image"

export default function Card({ title, release_date, poster_path, id }) {
  const imagePath = "https://image.tmdb.org/t/p/original"
  return (
    <div className="">
      <h1 className="text-base">{title}</h1>
      <h2 className=" text-sm">{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={title}
          priority
        />
      </Link>
    </div>
  )
}