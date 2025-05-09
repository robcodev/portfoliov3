export default function Header(){
    return(
        <>
            <header className={'flex justify-between my-8 mt-16 rounded w-full mx-auto'}>
                <h1
                    className={'uppercase text-3xl items-start text-start text-whiteRob text-handjet-bold leading-[1em]'}>
                    Robert <br/> Correa <br/> Toro
                </h1>

                <nav>
                    <div className={'flex gap-4 text-handjet justify-center text-center  text-whiteRob text-2xl '}>

                        <a
                            className={'hover:font-bold uppercase cursor-pointer text-handjet'}
                        >Sobre Mi</a>
                        <a
                            className={'hover:font-bold uppercase cursor-pointer text-handjet'}
                        >Contacto</a>
                    </div>

                </nav>
                <div>

                </div>
            </header>
        </>
    )
}