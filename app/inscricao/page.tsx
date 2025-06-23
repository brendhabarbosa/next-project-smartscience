'use client';
import { useState } from 'react';
import  axios from 'axios';
import {useRouter} from 'next/navigation';

export default function Inscription() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        affiliation: '',
        password: '',
    });
    const [status, setStatus] = useState(false);
    const [msg, setMsg] = useState('');
    const router = useRouter();


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    try{
        const response = await axios.post('/api/route', form);
        if (response.status === 200 || response.status === 201) {
            setStatus(true);
            setMsg('Inscrição realizada com sucesso!')
            setForm({
                name: '',
                email: '',
                affiliation: '',
                password: ''
            });
            setTimeout(() => {
                router.push("/login");
            }, 1000);
        }
    } catch (error) {
        setMsg('Ocorreu um erro ao processar sua inscrição.');
    }
};

    return (
        <>
            <main>
                <form onSubmit={handleSubmit}>
                    <h2>Inscrição</h2>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" value={form.name}  onChange={e => setForm({ ...form, name: e.target.value })} required />

                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" value={form.email} onChange={e => setForm({...form, email: e.target.value })}  name="email" required />

                    <label htmlFor="affiliation">Instituição:</label>
                    <input type="text" id="affiliation" value={form.affiliation} onChange={e => setForm({...form, affiliation: e.target.value})} name="affiliation" required />

                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} name="password" required />

                    <button type="submit">Enviar</button>
                    {msg && <p>{msg}</p>}
                </form>
            </main>
        
        </>
    )

}