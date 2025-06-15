import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-50 p-8">
      
      <h1 className="text-4xl font-bold mb-6">Bem-vindo ao Meu Projeto!</h1>

      <Image 
        src="/images/teacher-happy.jpg" 
        alt="Professor feliz" 
        width={500} 
        height={400} 
        className="rounded-2xl shadow-lg"
      />

      <p className="mt-6 text-lg text-gray-700">
        Esta é uma imagem carregada da pasta public/images do projeto.
      </p>
      
    </main>
  );
}
