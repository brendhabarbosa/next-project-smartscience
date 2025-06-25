import Link from 'next/link';
import { auth } from '../../auth';
export default async function DashboardPage() {
    const session = await auth();
    if (!session || session.user.role !== "admin") {
    return <p>Acesso negado</p>; 
  }
    return (
        <>
            <main>
                <h2>Painel de Administração</h2>
                <p>Bem-vindo ao painel de administração. Aqui você pode gerenciar usuários, artigos e inscrições.</p>
                <Link href="/dashboard/inscritos">
                    <button>Ver inscritos</button>
                </Link>
                <Link href="/dashboard/artigos_submetidos">
                    <button>Ver artigos</button>
                </Link>
            </main>
        </>
    );
}