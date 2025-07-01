import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), "data", "articles.json");

export async function POST(request: Request) {
    const data = await request.json();
    if (!data.title || !data.autorId || !data.content || !data.autores) {
        return NextResponse.json({ message: "Dados incompletos." }, { status: 400 });
    }
    else {
        const articles = JSON.parse(fs.readFileSync(filePath, "utf-8"));

        const newArticle = {
            id: String(Date.now()),
            title: data.title,
            autorId: data.autorId,
            content: data.content,
            autores: data.autores,
        };

        articles.push(newArticle);
        fs.writeFileSync(filePath, JSON.stringify(articles, null, 2));
        return NextResponse.json({ message: "Artigo publicado com sucesso!" }, { status: 200 });
    }}