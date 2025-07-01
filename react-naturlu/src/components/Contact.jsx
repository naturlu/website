import './Contact.css';

export default function Contact() {
  return (
    <section id="contato">
      <div className="section-container">
        <h2>Contato</h2>
        <p>Entre em contato pelo email: <a href="mailto:geral@naturlu.pt">geral@naturlu.pt</a></p>
        <p>Ou pelo WhatsApp/telemóvel: <a href="https://wa.me/351913537133" target="_blank" rel="noopener">+351 913 537 133</a></p>
        <form action="https://formsubmit.co/geral@naturlu.pt" method="POST">
          <input type="text" name="Nome" placeholder="Nome" required />
          <input type="email" name="Email" placeholder="Email" required />
          <textarea name="Mensagem" placeholder="Mensagem" required></textarea>
          <button type="submit">Enviar</button>
        </form>
        <div className="mapa-localizacao">
          <iframe src="https://www.google.com/maps?q=Rua+gestosa+Cima,+Sandim,+Vila+Nova+Gaia&output=embed" width="100%" height="300" style={{border:0, borderRadius:'1rem', marginTop:'1.5rem'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
} 