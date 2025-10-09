import { Link } from "react-router-dom"

const Header=()=>{
    return(
        <>
        <header className="h-[10dvh] w-dvw border-1 border-white backdrop-blur-sm fixed top-0 z-1 flex sm:justify-around justify-between">
            <div className="h-full flex items-center">
                <img src="https://thesimpsonsapi.com/logo.webp" className="sm:w-[200px] w-[150px]" alt="iconoSimpsons" />
            </div>
            <Lista/>
        </header>
        </>
    )
}
export default Header

const Lista=()=>{
    return(
    <>
        <nav>
            <ul className="flex items-center gap-10 h-full font-medium sm:text-base text-sm">
                <li><Link to="/personajes">Personajes</Link></li>
                <li><Link to="/episodios">Episodios</Link></li>
                <li><Link to="/localidades">Localidades</Link></li>
                <li className="h-full"><a href="#"><img src="https://img.icons8.com/?size=100&id=iAmlVpsW8TOS&format=png&color=000000"
                 className="sm:h-full sm:w-auto sm:block hidden" alt="iconoHOmero"/></a></li>
            </ul>
        </nav>
    
    </>
    )
}