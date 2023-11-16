import Image from "next/image";
import Link from "next/link";

const Topanime = ({api}) => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5 px-4">
            {api.data?.map((topanime, index) => {
                return(
                    <Link href={`/anime/${topanime.mal_id}`} className="shadow-xl hover:scale-105 hover:text-owned-dark transition-all cursor-pointer" key={index}>
                        <Image src={topanime.images.webp.image_url} width={350} height={350} alt="..." className="object-cover"/>
                        <h1 className="font-bold text-owned-dark md:text-xl text-md px-2 mt-2">{topanime.title}</h1>
                        <h1 className="font-bold text-owned-dark md:text-xl text-md px-2 mb-2">⭐{topanime.score}</h1>
                    </Link>
                )
            })}
        </div>
    )
}

export default Topanime;