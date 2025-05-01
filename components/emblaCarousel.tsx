import useEmblaCarousel from 'embla-carousel-react'
import slide1 from '../public/heroSec.jpg'
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

export default function EmblaCarousel(){
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        skipSnaps: true,
    },[Autoplay({
        delay: 4000
    })]);

    return (
        <section className={'relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[42rem] w-screen'}>
            <h3 className={'text-whiteRob uppercase text-xl text-handjet-bold my-4 text-center'}>
                Trabajo Reciente
            </h3>
            <div className={'overflow-hidden absolute w-screen'} ref={emblaRef}>
                <div className={'flex [&>div]:flex-[0_0_auto] gap-3 [&>div]:h-120  [&>div]:rounded '}>
                    <div className={'   border-whiteRob '}>

                        {/*Aquí se traen los datos desde la db*/}
                        <picture className={'aspect-square'}>

                            <Image className={'w-full h-full object-cover rounded'} src={slide1} alt=""/>
                        </picture>
                    </div>

                    <div className={' bg-whiteRob border-whiteRob'}>
                        <Image className={'w-full h-full object-cover rounded'} src={slide1} alt=""/>
                    </div>

                    <div className={' bg-whiteRob border-whiteRob'}>
                        <Image className={'w-full h-full object-cover rounded'} src={slide1} alt=""/>
                    </div>

                    <div className={' bg-whiteRob border-whiteRob'}>
                        <Image className={'w-full h-full object-cover rounded'} src={slide1} alt=""/>
                    </div>

                    <div className={' bg-whiteRob border-whiteRob'}>
                        <Image className={'w-full h-full object-cover rounded'} src={slide1} alt=""/>
                    </div>

                    <div className={' bg-whiteRob border-whiteRob'}>
                        <Image className={'w-full h-full object-cover rounded'} src={slide1} alt=""/>
                    </div>


                </div>
            </div>
        </section>
    )
}