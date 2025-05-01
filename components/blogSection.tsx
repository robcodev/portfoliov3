import arrow from '../public/arrow.png'
import {useEffect, useState} from "react";
import Image from "next/image";

type EditorBlock = {
    id?: string,
    type: string,
    data: {
        text: string
    }
}

export type EditorContent = {
    time: number,
    blocks: EditorBlock[]
    version: string
}


type BlogPosts = {
    id: number,
    title: string,
    content: EditorContent,
    slug: string | null,
    published_at: string,

};


export default function BlogSection() {

    const [blogPosts, setBlogPosts] = useState<BlogPosts[]>([]);

    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch('/api/blog', {
                method: 'GET',
            });

            try {

                const data = await response.json();
                console.log(data, 'desde blogSection');
                setBlogPosts(data);

            } catch (error) {
                console.log(error, '4');
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <section className={' my-32 '}>

                <h3 className={'text-whiteRob text-3xl text-start text-handjet-bold my-4'}>
                    / Blog
                </h3>

                {blogPosts.map((post) => {
                    const blocks = post.content.blocks as EditorBlock[];

                    const headerBlock = blocks.find((b) => b.type === "header")
                    const descriptionBlock = blocks.find((b) => b.type === "paragraph")

                    return (
                        <div key={post.id}
                             className={'flex justify-between gap-4'}>
                            <article className={'border-2 border-whiteRob rounded-lg p-4 w-1/3'}>
                                <h3 className={'text-start text-whiteRob capitalize text-handjet-regular text-2xl'}>
                                    {headerBlock?.data?.text}
                                </h3>
                                <p className={'text-whiteRob text-handjet-regular text-start mt-4'}>
                                    {descriptionBlock?.data?.text}
                                </p>
                                <div className={'flex justify-start mt-4'}>
                                    <h4 className={'text-sm h-fit text-center align-baseline bg-whiteRob px-12 py-1 text-handjet-regular rounded-full'}>
                                        Leer más...</h4>
                                    <Image
                                        className={'ms-2'}
                                        src={arrow} alt=""/>
                                </div>

                            </article>
                        </div>
                    )
                })}
            </section>
        </>
    )
}