import Topanime from "@/app/components/Topanime"
import Header from "@/app/components/Header"
import { GetAPIAnime } from "@/app/components/libs/get-api"
const Searchpage = async ({params}) => {
    const {keyword} = params
    const decodedKeyword = decodeURI(keyword)
    const searchAnime = await GetAPIAnime ("anime", `q=${decodedKeyword}`)
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