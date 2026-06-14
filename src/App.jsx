import { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import RevealOnScroll from './components/RevealOnScroll';
import Contact from './components/Contact';
import logo from './assets/logo.png';
import './App.css';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="#" className="logo-wrapper">
          <img src={logo} alt='Logo' className='logo' />
          <span className="logo-text">Maxym.Dev</span>
        </a>

        <nav>
          <ul className="nav-links">
            <li><a href="#about">Про мене</a></li>
            <li><a href="#projects">Проєкти</a></li>
            <li><a href="#contact">Контакти</a></li>
          </ul>
        </nav>

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
};

export default function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Встановлюємо атрибут для CSS змінних
    document.documentElement.setAttribute('data-theme', theme);
    document.title = "Maxym Melnychuk | Web Developer";
  }, [theme]);

  return (
    <div className="app-wrapper">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main>
        <RevealOnScroll>
          <section className="hero-section">
            <div className="container hero-content">
              <h1 className="hero-title">
                Привіт, я <span className="highlight">Максим Мельничук</span> 👋
              </h1>
              <p className="hero-subtitle">Я створюю сучасні, швидкі та креативні вебрішення</p>
              <a href="#projects" className="btn primary-btn">Дізнатися більше</a>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section id="about" className="section">
            <div className="container">
              <h2 className="section-title">Про мене</h2>
              <div className="about-card">
                <p>
                  Я веб-розробник з досвідом створення сучасних інтерактивних додатків.
                  Використовую React, JavaScript та сучасний CSS для побудови швидких
                  та адаптивних інтерфейсів. Прагну до написання чистого коду та створення
                  ідеального користувацького досвіду.
                </p>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section id="contact" className="section">
            <div className="container">
              <Contact />
            </div>
          </section>
        </RevealOnScroll>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Вебстудія Мельничука Максима. Всі права захищені.</p>
        </div>
      </footer>
    </div>
  );
}