components/HeroSection.js
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '2rem',
      background: 'linear-gradient(90deg, #4e54c8, #8f94fb)',
      color: 'white',
      borderRadius: '10px',
      marginBottom: '2rem',
      gap: '2rem',
      flexWrap: 'wrap',
    }}>
      <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Bem-vindo à <strong>ProEduca</strong> 🎓
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.5', maxWidth: '600px' }}>
          Plataforma gratuita de apoio a professores!  
          Conteúdo exclusivo para transformar suas aulas e engajar alunos.
        </p>
        <button style={{
          marginTop: '1.5rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#ff6f61',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '1rem',
          boxShadow: '0 4px 8px rgba(255,111,97,0.4)'
        }}
        onClick={() => alert('Vamos começar!')}
        >
          Comece Agora 🚀
        </button>
      </div>
      <div style={{ flex: '1 1 300px', position: 'relative', height: '320px', maxWidth: '400px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
        <Image
          src="/images/teacher-happy.jpg"
          alt="Professor contente com conteúdo exclusivo"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </section>
  )
}
