"use client"

import { useEffect, useState } from "react"
import HeaderMenu from "../components/Utilities/HeaderMenu"
import Pagination from "../components/Utilities/Pagination"
import Topanime from "../components/Topanime"
import { GetAPIAnime } from "../components/libs/get-api"

const PopulerPage = () => {
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])

    const fetchData = async () => {
        const dataPopuler = await GetAPIAnime ("top/anime", `page=${page}`)
        setData(dataPopuler)
    }

    useEffect(() => {
        fetchData()
    },[page])
    return(
        <>
            <HeaderMenu title={"Anime Terpopuler"}/>
            <Topanime api={data}/>
            <Pagination Page={page} lastPage= {data.pagination?.last_visible_page} setPage={setPage}/>
        </>
    )
}
export default PopulerPage