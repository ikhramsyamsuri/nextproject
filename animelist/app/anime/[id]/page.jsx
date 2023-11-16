import VideoPlayer from "@/app/components/Utilities/videoplayer"
import { GetAPIAnime } from "@/app/components/libs/get-api"
import Image from "next/image"

const Page = async ({params:{id}}) => {
    const anime = await GetAPIAnime(`anime/${id}`)
    return(
        <>
        <div className="px-4 mt-4">
            <h3 className="text-4xl text-owned-dark">{anime.data.title} ({anime.data.year})</h3>
        </div>
        <div className="px-4 flex sm:flex-nowrap flex-wrap gap-2">
            <Image 
            src={anime.data.images.webp.image_url} 
            alt= {anime.data.images.jpg.image_url} 
            width={250} 
            height={250} 
            className="w-full rounded border border-owned-dark"
            />
            <p className="text-justify">{anime.data.synopsis}</p>
        </div>
        <div className="pt-1 px-1 flex gap-2 text-owned-dark overflow-x-auto ">
            <div className="px-2 w-auto text-center justify-center items-center bg-owned-secondary rounded-full">
                <h3> Status : {anime.data.status} </h3>
            </div>
            <div className="px-2 +w-auto text-center justify-center items-center bg-owned-secondary rounded-full">
                <h3> Episode : {anime.data.episodes} </h3>
            </div>
            <div className="px-2 +w-auto text-center justify-center items-center bg-owned-secondary rounded-full">
                <h3> Score : ⭐ {anime.data.score} </h3>
            </div>
        </div>
        <div>
            <VideoPlayer youtubeid={anime.data.trailer.youtube_id}/>
        </div>
        </>
    )
}

export default  Page