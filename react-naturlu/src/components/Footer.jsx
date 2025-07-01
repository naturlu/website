import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 NaturLu. O caminho da transformação. Todos os direitos reservados.</p>
        <div className="footer-social">
          <a href="#" title="Instagram" className="social-icon">&#x1F33F;</a>
          <a href="#" title="Facebook" className="social-icon">&#x1F426;</a>
          <a href="https://wa.me/351913537133" title="WhatsApp" className="social-icon" target="_blank" rel="noopener">&#x1F4F1;</a>
        </div>
      </div>
    </footer>
  );
} 