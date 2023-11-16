import Link from "next/link"
import Topanime from "./components/Topanime";
import Header from "./components/Header";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)
  const topanime = await response.json()

  return (
    <>
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer"/>
        <Topanime api={topanime}/>
      </section> 
    </>
  )
}
