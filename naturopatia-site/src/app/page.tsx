import Image from "next/image";

const services = [
  {
    icon: (
      <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v9m0 0c-4.418 0-8-1.79-8-4V7c0-2.21 3.582-4 8-4s8 1.79 8 4v6c0 2.21-3.582 4-8 4z" /></svg>
    ),
    title: "Consulta Naturopática",
    desc: "Avaliação individualizada e plano de equilíbrio natural."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
    ),
    title: "Fitoterapia",
    desc: "Utilização de plantas medicinais para promover saúde e bem-estar."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" /></svg>
    ),
    title: "Terapias Manuais",
    desc: "Massagem, reflexologia e técnicas para relaxamento profundo."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5z" /></svg>
    ),
    title: "Alimentação Natural",
    desc: "Orientação para reeducação alimentar e vitalidade."
  },
];

const testimonials = [
  {
    name: "Ana Paula",
    text: "A NaturLu transformou a minha saúde física e emocional. Atendimento acolhedor e resultados reais!"
  },
  {
    name: "Carlos Silva",
    text: "Profissionalismo e cuidado em cada detalhe. Recomendo a quem procura bem-estar verdadeiro."
  },
  {
    name: "Juliana Mendes",
    text: "Senti-me renovada após as sessões. Ambiente tranquilo e terapias naturais que funcionam!"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 to-emerald-100">
      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Clínica NaturLu"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg mb-4">NaturLu</h1>
          <h2 className="text-xl sm:text-2xl text-emerald-100 font-medium mb-6 drop-shadow">O caminho da transformação</h2>
          <a href="#contato" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition">Agende sua consulta</a>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="max-w-5xl mx-auto py-16 px-4 grid gap-10">
        <h3 className="text-3xl font-bold text-emerald-800 text-center mb-10">Os Nossos Serviços</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
              <div className="mb-4">{s.icon}</div>
              <h4 className="text-lg font-semibold text-emerald-700 mb-2">{s.title}</h4>
              <p className="text-gray-600 text-base">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE E BENEFÍCIOS */}
      <section className="bg-white/90 py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">O que é a Naturopatia?</h3>
            <p className="text-gray-700 text-lg mb-4">A Naturopatia é uma abordagem terapêutica que utiliza métodos naturais para estimular a capacidade de auto-cura do organismo. Integra práticas como fitoterapia, alimentação saudável, técnicas de relaxamento e terapias manuais, promovendo o equilíbrio físico, mental e emocional.</p>
            <ul className="list-disc list-inside text-emerald-700 text-base space-y-1">
              <li>Promoção do bem-estar integral</li>
              <li>Redução do stress e ansiedade</li>
              <li>Reforço do sistema imunitário</li>
              <li>Melhoria da qualidade do sono</li>
              <li>Prevenção de doenças crónicas</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80"
              alt="Bem-estar NaturLu"
              width={320}
              height={320}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-16 px-4 bg-emerald-50">
        <h3 className="text-3xl font-bold text-emerald-800 text-center mb-10">O que dizem os nossos clientes</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-emerald-400 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6.17A7.001 7.001 0 0 0 2 13a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1c0-1.306.835-2.417 2.17-2.83A3.001 3.001 0 0 1 12 7a3 3 0 0 1 2.83 3.17C17.165 10.583 18 11.694 18 13a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1c0-3.866-3.134-7-7-7a7.001 7.001 0 0 0-6.83 6.17z" /></svg>
              <p className="text-gray-700 text-base mb-4">"{t.text}"</p>
              <span className="text-emerald-700 font-semibold">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-emerald-700 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Marque a sua consulta</h3>
          <p className="mb-6 text-lg">Entre em contacto para saber mais ou agendar um atendimento personalizado.</p>
          <div className="flex flex-col gap-2 items-center">
            <a href="mailto:geral@naturlu.pt" className="underline text-lg">geral@naturlu.pt</a>
            <a href="https://wa.me/351913537133" className="underline text-lg">+351 913537133</a>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-emerald-900 text-emerald-100 py-6 text-center text-sm mt-auto">
        <div className="mb-2">© {new Date().getFullYear()} NaturLu. O caminho da transformação.</div>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Facebook</a>
        </div>
      </footer>
    </div>
  );
}
