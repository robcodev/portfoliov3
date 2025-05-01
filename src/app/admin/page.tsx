'use client'

import dynamic from "next/dynamic";

const EditorJs = dynamic(()=> import('../../../components/editorJs'), {
    ssr: false,

})
export default function AdminPage() {

    return (
        <>
        <EditorJs/>
        </>
    )
}