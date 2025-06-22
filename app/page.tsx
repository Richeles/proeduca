'use client';

import { useState } from 'react';
import { gerarTextoComIA } from '../lib/openrouter';

export default function Home() {
  const [prompt, setPrompt] = useState('Crie um roteiro de aula sobre inteligência artificial para alunos do ensino médio.');
  const [resposta, setResposta] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function handleGerar() {
    if (!prompt.trim()) {
      alert('Por favor, digite um prompt para gerar o texto.');
      return;
    }

    setCarregando(true);
    setResposta('');
    try {
      const resultado = await gerarTextoComIA(prompt);
      setResposta(resultado);
    } catch (error) {
      setResposta('Erro ao gerar texto. Tente novamente.');
      console.error(error);
    }
    setCarregando(false);
  }

  return (
    <main style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Gerador de Roteiros com IA</h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
        style={{ width: '100%', padding: '10px', fontSize: '16px', marginTop: '10px' }}
      />

      <button
        onClick={handleGerar}
        disabled={carregando}
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: carregando ? 'not-allowed' : 'pointer',
        }}
      >
        {carregando ? 'Gerando...' : 'Gerar com IA'}
      </button>

      <div
        style={{
          marginTop: '20px',
          whiteSpace: 'pre-wrap',
          backgroundColor: '#f0f0f0',
          padding: '15px',
          borderRadius: '8px',
          minHeight: '100px',
          fontSize: '16px',
        }}
      >
        {resposta || 'A resposta aparecerá aqui.'}
      </div>
    </main>
  );
}
