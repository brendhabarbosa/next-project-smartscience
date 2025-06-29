import {auth} from "../../../auth";
export default async function InscriptionList() {
    const session = await auth();
    if (!session || session.user.role !== "admin") {
    return <p>Acesso negado</p>; 
  }
    return (
        <>
            <main>
                <h2>Lista de Inscritos</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Instituição</th>
                        </tr>
                    </thead>
                </table>
            </main>
        </>
    );
}