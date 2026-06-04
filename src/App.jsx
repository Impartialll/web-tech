import { useTheme } from './hooks/useTheme';
import RevealOnScroll from './components/RevealOnScroll';
import Contact from './components/Contact';
import logo from './assets/logo.png'
import { useEffect } from 'react';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header style={{ padding: '20px 0', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src={logo} alt='Logo' id='logo' />
        <nav>
          <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
            <li><a href="#about" style={{ color: 'var(--text-color)' }}>Про мене</a></li>
            <li><a href="#projects" style={{ color: 'var(--text-color)' }}>Проєкти</a></li>
            <li><a href="#contact" style={{ color: 'var(--text-color)' }}>Контакти</a></li>
          </ul>
        </nav>
        <button onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Темна' : '☀️ Світла'}
        </button>
      </div>
    </header>
  );
};

export default function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.title = "Maxym Melnychuk";
  }, []);

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <RevealOnScroll>
        <section className="container hero-section">
          <div>
            <h1>Ласкаво просимо на сайт Мельничука Максима!</h1>
            <p>Я створюю креативні вебрішення</p>
            <button style={{ marginTop: '20px' }}>Дізнатися більше</button>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section id="about" className="container">
          <h2>Про мене</h2>
          <p>Я веб-розробник з досвідом створення сучасних інтерактивних додатків. Використовую React, JavaScript та сучасний CSS для побудови швидких та адаптивних інтерфейсів.</p>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>

      <footer style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid var(--border-color)' }}>
        <p>© 2026 Вебстудія Мельничука Максима</p>
      </footer>
    </div>
  );
}