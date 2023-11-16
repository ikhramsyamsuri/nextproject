"use client"

import { useEffect, useState } from "react"
import HeaderMenu from "../components/Utilities/HeaderMenu"
import Pagination from "../components/Utilities/Pagination"
import Topanime from "../components/Topanime"

const PopulerPage = () => {
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])

    const fetchData = async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
            )
        const dataPopuler = await response.json()
        setData(dataPopuler)
    }

    useEffect(() => {
        fetchData()
    },[page])
    return(
        <>
            <HeaderMenu title={"Anime Terpopuler"}/>
            <Topanime api={data}/>
            <Pagination Page={page} lastPage= {data.pagination.last_visible_page} setPage={setPage}/>
        </>
    )
}
export default PopulerPage