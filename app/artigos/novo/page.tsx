'use client'
import {useSession} from "next-auth/react";
import {useState} from "react";
export default function NewArticle() {
    const {data: session} = useSession();
    const [title, setTitulo] = useState('');
    const [autores, setAutor] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [msg, setMsg] = useState('');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const NewArticle = {
            title: title,
            autorId: session?.user?.id ?? '',   
            content: conteudo,
            autores: autores,
        };
        
        await fetch('/api/artigos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(NewArticle),
        });

        setMsg('Artigo publicado com sucesso!');
        setTitulo('');
        setAutor('');
        setConteudo('');
    }


    
   

    return (
        <>
            <main>
                <form onSubmit={handleSubmit}>
                    <h2>Novo Artigo</h2>
                    <label htmlFor="title">Título:</label>
                    <input type="text" id="title" name="title"  value={title} onChange={(e) => setTitulo(e.target.value)} required />

                    <label htmlFor="title">Autores:</label>
                    <input type="text" id="author" name="author" value={autores} onChange={(e) => setAutor(e.target.value)} required />

                    <label htmlFor="content">Conteúdo:</label>
                    <textarea id="content" name="content" value={conteudo} onChange={(e) => setConteudo(e.target.value)} required></textarea>

                    <button type="submit">Publicar</button>
                    {msg && <p>{msg}</p>}
                </form>
            </main>
        </>
    );
}