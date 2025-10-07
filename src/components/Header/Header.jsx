const Header=()=>{
    return(
        <>
        <header className="h-[10dvh] w-dvw border-1 border-white backdrop-blur-sm sticky top-0 z-1 flex sm:justify-around justify-between">
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
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Personajes</a></li>
                <li><a href="#">ciudades</a></li>
                <li className="h-full"><a href="#"><img src="https://toppng.com/uploads/preview/homero-11529079932hqgwgqw5au.png" className="sm:h-full sm:w-auto sm:block hidden" alt="iconoHOmero"/></a></li>
            </ul>
        </nav>
    </>
    )
}