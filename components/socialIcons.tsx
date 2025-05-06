import githubIcon from "../public/gitHub.png";
import linkedinIcon from "../public/linkedIn.png";
import instagramIcon from "../public/instagram.png";

import Image from "next/image";

export default function SocialIcons() {

    return (
        <>
            <div className={'grid grid-cols-3 gap-2 my-8'}>
                <a className={'flex gap-1 w-full rounded-full justify-center items-center border-2 border-whiteRob px-2 py-1 '}
                   href="#">
                    <Image
                        src={githubIcon}
                        alt={''}
                        className={'h-4 w-4'}/>
                    <span className={'uppercase text-whiteRob text-anton text-lg'}>github</span>
                </a>

                <a className={'flex w-full border-2 gap-1 border-whiteRob rounded-full justify-center items-center  px-2 py-1'}
                   href="#">
                    <Image
                        src={linkedinIcon}
                        alt={''}
                        className={' h-4 w-4'}/>
                    <span className={'uppercase text-whiteRob text-lg text-anton'}>linkedin</span>
                </a>
                <a className={'flex w-full gap-1 rounded-full justify-center items-center border-2 border-whiteRob px-2 py-1'}
                   href="#">
                    <Image
                        src={instagramIcon}
                        alt={''}
                        className={'h-4 w-4'}/>
                    <span className={'uppercase text-whiteRob text-lg text-anton'}>instagram</span>
                </a>
            </div>
        </>
    )
}