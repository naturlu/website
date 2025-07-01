import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h2>Bem-vindo à NaturLu</h2>
        <p>Transforme a sua saúde e bem-estar com naturopatia moderna, natural e confiável.</p>
        <a href="#contato" className="btn-hero">Agende uma consulta</a>
      </div>
    </section>
  );
} 