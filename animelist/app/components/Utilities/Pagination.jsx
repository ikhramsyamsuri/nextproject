const Pagination = ({Page, setPage, lastPage}) => {
    
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 1
        })
    }
    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }
    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    return(
        <div className="flex justify-end items-center px-4 gap-3 text-owned-dark text-xl">
            <button onClick={handlePrevPage} className="transition-all hover:text-owned-secondary">Prev</button>
            <p>{Page} of {lastPage}</p>
            <button onClick={handleNextPage} className="transition-all hover:text-owned-secondary">Next</button>
        </div>
    )
}
export default Pagination