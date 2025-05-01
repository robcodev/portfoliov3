import SocialIcons from "./socialIcons";

export default function Footer() {
    return (
        <footer className={''}>
            <h2
                className={'uppercase text-4xl text-center text-whiteRob text-handjet-bold leading-[1em]'}>
                Robert Correa Toro
            </h2>



            <SocialIcons/>
            <p
                className={'text-handjet-regular text-md my-8 text-whiteRob text-center'}>©2024-2025 Robert Correa Toro - Todos los derechos reservados.</p>
        </footer>
    )
}