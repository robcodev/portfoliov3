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

                    </div>
                    <div className={'flex justify-between items-center w-full gap-4 mb-4'}>
                        <div className={'w-full xl:h-[84px] bg-whiteRob rounded-full'}></div>
                        <h2 className={'red text-nowrap text-anton text-8xl text-end'}>FULL STACK
                            DEVELOPER</h2>
                    </div>
                </div>
                <SocialIcons/>

            </section>
            <EmblaCarousel/>
            <BlogSection/>
            <Footer/>
        </main>
    );
}
