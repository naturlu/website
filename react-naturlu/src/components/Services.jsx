import './Services.css';

export default function Services() {
  return (
    <section id="servicos">
      <div className="section-container">
        <h2>Serviços</h2>
        <div className="servicos-cards">
          <div className="card-servico">
            <div className="icon-servico">🌱</div>
            <h3>Consulta Naturopática</h3>
            <p>Avaliação holística e orientação personalizada para o seu bem-estar.</p>
          </div>
          <div className="card-servico">
            <div className="icon-servico">🌿</div>
            <h3>Fitoterapia</h3>
            <p>Uso terapêutico de plantas medicinais para promover a saúde natural.</p>
          </div>
          <div className="card-servico">
            <div className="icon-servico">🍃</div>
            <h3>Aromaterapia</h3>
            <p>Óleos essenciais para equilíbrio físico, mental e emocional.</p>
          </div>
          <div className="card-servico">
            <div className="icon-servico">💆‍♀️</div>
            <h3>Massagem Terapêutica</h3>
            <p>Técnicas naturais para relaxamento, alívio de dores e revitalização.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 