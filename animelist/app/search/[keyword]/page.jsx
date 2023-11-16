import Topanime from "@/app/components/Topanime"
import Header from "@/app/components/Header"

const Searchpage = async ({params}) => {
    const {keyword} = params
    const decodedKeyword = decodeURI(keyword)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)
    const searchAnime = await response.json()

    return (
        <>
            <section>
                <Header title={`'${decodedKeyword}...'`}/>
                <Topanime api={searchAnime}/>
            </section> 
        </>
    )
}

export default Searchpage