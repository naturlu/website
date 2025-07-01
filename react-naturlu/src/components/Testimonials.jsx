import './Testimonials.css';

export default function Testimonials() {
  return (
    <section id="depoimentos">
      <div className="section-container">
        <h2>Depoimentos</h2>
        <div className="depoimentos-cards">
          <div className="card-depoimento">
            <p>"Senti uma transformação incrível na minha saúde e energia!"</p>
            <span>- Ana S.</span>
          </div>
          <div className="card-depoimento">
            <p>"A atenção e o cuidado fizeram toda a diferença no meu bem-estar."</p>
            <span>- João M.</span>
          </div>
          <div className="card-depoimento">
            <p>"Recomendo a NaturLu a todos que buscam equilíbrio natural."</p>
            <span>- Carla P.</span>
          </div>
        </div>
      </div>
    </section>
  );
} 