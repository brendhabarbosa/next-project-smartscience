import Link from 'next/link';
export default function AdminPage() {
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