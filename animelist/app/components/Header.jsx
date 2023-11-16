import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex justify-between items-center">
            <h1 className="font-bold text-owned-dark text-4xl px-4 mt-4">{title}</h1>
            { 
            linkHref && linkTitle ?
            <Link 
                href={linkHref} 
                className="px-4 mt-4 md:text-xl text-start text-owned-dark  
                hover:text-owned-secondary
                transition-all">
                    {linkTitle}
            </Link>
            : null
        }
        </div>
    )
}
export default Header