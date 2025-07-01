import './Header.css';

export default function Header() {
  return (
    <header className="sticky-header">
      <div className="header-container">
        <h1 className="titulo-naturlu">NaturLu. <span>O caminho da transformação.</span></h1>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
} 