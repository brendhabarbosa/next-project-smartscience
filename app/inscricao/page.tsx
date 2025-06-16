'use client';
import { useState, useEffect } from 'react';
import  axios from 'axios';

export default function Inscription() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        affiliation: '',
        password: '',
    });
    const [status, setStatus] = useState(false);
    const [msg, setMsg] = useState('');
    
     useEffect(() => {
        const InscricaoOk = localStorage.getItem('inscricao') === 'true'
        setStatus(InscricaoOk)
  }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
    try{
            const resposta = await axios.post('/api/route', form);
            if (resposta.status == 200){
                localStorage.setItem('inscricao', 'true')
                setStatus(true)
            setMsg('Inscrição realizada com sucesso!')
            setForm({name: '',
            email: '',
            affiliation: '',
            password: ''})
    } }
    catch (error) {
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