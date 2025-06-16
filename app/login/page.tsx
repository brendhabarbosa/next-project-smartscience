import { signIn } from "../auth"
export default function Login() {
    return (
        <>
            <main>
                <form action="">
                    <h2>Login</h2>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" required />

                    <button type="submit">Entrar</button>
                </form>
            </main>
        </>
    );
}