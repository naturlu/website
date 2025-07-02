import './Hero.css';

export default function Beneficios() {
  return (
    <section id="beneficios" className="hero" style={{background: 'none', minHeight: 'unset', marginBottom: '0'}}>
      <div className="hero-content" style={{boxShadow: 'none', background: 'rgba(255,255,255,0.9)'}}>
        <h2>Benefícios da Naturopatia</h2>
        <ul style={{textAlign: 'left', maxWidth: 500, margin: '1.5rem auto', fontSize: '1.15rem', color: '#2e4d36cc', lineHeight: 1.6}}>
          <li>🌱 Promoção do equilíbrio físico, mental e emocional</li>
          <li>🌿 Fortalecimento do sistema imunológico</li>
          <li>💧 Redução do stress e aumento da energia vital</li>
          <li>🍃 Prevenção de doenças e promoção da saúde a longo prazo</li>
          <li>🌸 Tratamentos naturais, personalizados e sem efeitos colaterais</li>
          <li>🧘‍♀️ Melhora do sono, digestão e bem-estar geral</li>
        </ul>
        <p style={{marginTop: '1.2rem'}}>Descubra como a abordagem NaturLu pode transformar a sua vida de forma natural, segura e acolhedora!</p>
      </div>
    </section>
  );
} 