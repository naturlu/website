import './Hero.css';

export default function Sobre() {
  return (
    <section id="sobre" className="hero" style={{background: 'none', minHeight: 'unset', marginBottom: '0'}}>
      <div className="hero-content" style={{boxShadow: 'none', background: 'rgba(255,255,255,0.9)'}}>
        <h2>Sobre a NaturLu</h2>
        <p>
          A NaturLu nasceu da paixão pela saúde natural e pelo bem-estar integral. Acreditamos que cada pessoa é única e merece um cuidado personalizado, respeitando corpo, mente e emoções. Nossa missão é promover a transformação positiva através da naturopatia, fitoterapia, aromaterapia e práticas integrativas, sempre com ética, ciência e carinho.
        </p>
        <p>
          Aqui, você encontra acolhimento, escuta ativa e orientação profissional para trilhar o caminho do equilíbrio e da vitalidade. Venha descobrir como a natureza pode ser sua aliada na busca por mais saúde, energia e qualidade de vida!
        </p>
      </div>
    </section>
  );
} 