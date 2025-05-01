import {Link} from "react-router-dom";

export default function Header(){
    return(
        <>
            <header className={'flex justify-between my-8 mt-16 rounded w-full mx-auto'}>
                <h1
                    className={'uppercase text-3xl items-start text-start text-whiteRob text-handjet-bold leading-[1em]'}>
                    Robert <br/> Correa <br/> Toro
                </h1>

                <nav>
                    <div className={'flex gap-4 text-handjet-regular justify-center text-center  text-whiteRob text-2xl '}>
                        {/*<Link*/}
                        {/*    to={'/portafolio'}*/}
                        {/*    className={'hover:font-bold uppercase cursor-pointer'}*/}
                        {/*    >Proyectos</Link>*/}
                        {/*<Link*/}
                        {/*    to={'/src/pages/admin/blog.jsx'}*/}
                        {/*    className={'hover:font-bold uppercase cursor-pointer'}*/}
                        {/*>Blog</Link>*/}
                        <a
                            className={'hover:font-bold uppercase cursor-pointer'}
                        >Sobre Mi</a>
                        <a
                            className={'hover:font-bold uppercase cursor-pointer'}
                        >Contacto</a>
                    </div>


                </nav>
                <div>
                    <h4 className={'uppercase text-2xl text-whiteRob text-handjet-bold text-end'}>
                        ES <br/>
                        EN
                    </h4>
                </div>

            </header>
        </>
    )
}