import { auth } from "../../../auth";
export default async function Articles() {
    const session = await auth();
    if (!session || session.user.role !== "admin") {
    return <p>Acesso negado</p>; 
  }
    return (
        <>
            <main>
                <h2>Artigos Submetidos</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Autor(a)</th>
                        </tr>
                    </thead>
                </table>
            </main>
        </>
    );
}