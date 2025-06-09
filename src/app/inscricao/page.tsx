'use client';
import { useState, useEffect } from 'react';

export default function Inscription() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        affiliation: ''
    });
    const [status, setStatus] = useState(false);
    const [msg, setMsg] = useState('');
    
     useEffect(() => {
        const InscricaoOk = localStorage.getItem('inscricao') === 'true'
        setStatus(InscricaoOk)
  }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const resposta = await fetch('/api/inscricao', {
            method: 'POST',
            body: JSON.stringify(form),
    })

    if (resposta.ok) {
        localStorage.setItem('inscricao', 'true')
        setStatus(true)
        setMsg('Inscrição realizada com sucesso!')
        setForm({
            name: '',
            email: '',
            affiliation: ''
        })
    } else {
      setMsg('Falha ao enviar inscrição.')
    }
  }
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

                    <button type="submit">Enviar</button>
                    {msg && <p>{msg}</p>}
                </form>
            </main>
        
        </>
    )

}