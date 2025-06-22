export async function gerarTextoComIA(prompt: string): Promise<string> {
  const API_KEY = process.env.OPENROUTER_API_KEY;

  if (!API_KEY) {
    throw new Error('Chave API OPENROUTER_API_KEY não configurada no .env');
  }

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: 'openai/gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 500,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Erro na API: ${error}`);
  }

  const data = await response.json();

  return data.choices?.[0]?.message?.content || 'Sem resposta da IA';
}
