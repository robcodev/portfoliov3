import {createClient} from "../../../../lib/server";
import {NextRequest, NextResponse} from "next/server";

export async function GET() {
    const {data, error} = await createClient()
        .from('blogPosts')
        .select('*');

    if (error) {
        console.log(error, 'aqui error 1');
        return NextResponse.json(error, {status: 500});
    }
    console.log(data, 'aqui data');
    return NextResponse.json(data, {status: 200});
}

export async function POST(request: NextRequest) {

    const body = await request.json();
    const {title, description, status, content} = body;

    console.log(content, 'aqui content');

    const {error} = await createClient()
        .from('blogPosts')
        .insert([
            {
                created_at: new Date(),
                content: content,
                //     falta agregar la fecha de publicación a trave´s de un formulario web
                //     falta regEx el header y convertir en slug
                title: title,
                description: description,
                status: status,

            }
        ])

    if (error) {
        return NextResponse.json(error, {status: 500})
    }
    return NextResponse.json(content, {status: 200})
}