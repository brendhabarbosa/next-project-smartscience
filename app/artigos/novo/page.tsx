export default function NewArticle() {
    return (
        <>
            <main>
                <form>
                    <h2>Novo Artigo</h2>
                    <label htmlFor="title">Título:</label>
                    <input type="text" id="title" name="title" required />

                    <label htmlFor="content">Conteúdo:</label>
                    <textarea id="content" name="content" required></textarea>

                    <button type="submit">Publicar</button>
                </form>
            </main>
        </>
    );
}