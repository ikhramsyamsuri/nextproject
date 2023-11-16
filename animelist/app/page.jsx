import Link from "next/link"
import Topanime from "./components/Topanime";
import Header from "./components/Header";
import { GetAPIAnime } from "./components/libs/get-api";

export default async function Page() {
  const topanime = await GetAPIAnime ("top/anime", "limit=8")

  return (
    <>
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer"/>
        <Topanime api={topanime}/>
      </section> 
    </>
  )
}
