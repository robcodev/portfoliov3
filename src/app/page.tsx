'use client'

import BlogSection from "../../components/blogSection";
import EmblaCarousel from "../../components/emblaCarousel";
import SocialIcons from "../../components/socialIcons";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Home() {

    return (
        <main className={'xl: '}>
          <Header/>


          <section className={'my-36'}>

            <div className={' '}>
              <div className={'flex justify-between w-full gap-8'}>
                <h1 className={'red text-nowrap text-anton text-8xl text-start'}>UX/UI DESIGNER
                  &&</h1>
                {/*<Link className={'w-full rounded-full flex gap-4 items-center justify-center '}*/}
                {/*      to={'/portafolio'}>*/}
                {/*  <h3 className={'uppercase text-4xl text-center bg-whiteRob rounded-full w-full h-fit text-[#070914] text-anton my-4 p-3.5 '}>Ver*/}
                {/*    Portafolio</h3>*/}
                {/*  <picture>*/}
                {/*    <Image*/}
                {/*        className={'h-full w-full'}*/}
                {/*        src='arrow.png' alt="flecha"/>*/}
                {/*  </picture>*/}
                {/*</Link>*/}

              </div>
              <div className={'flex justify-between items-center w-full gap-4 mb-4'}>
                <div className={'w-full xl:h-[84px] bg-whiteRob rounded-full'}></div>
                <h2 className={'red text-nowrap text-anton text-8xl text-end'}>FULL STACK
                  DEVELOPER</h2>
              </div>
            </div>
            <SocialIcons/>

            {/*    carrusel? ? */}

          </section>

          <EmblaCarousel/>

          <BlogSection/>



          <Footer/>

        </main>

);
}
