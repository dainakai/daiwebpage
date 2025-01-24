// App.js
import './App.css';
import { Route, Routes, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Home } from './components/home';
import { Home_en } from './components/home_en';
import { AboutMe } from './components/aboutme';
import { AboutMe_en } from './components/aboutme_en';
import { Researches } from './components/researches';
import { Researches_en } from './components/researches_en';
import { Achievements } from './components/achievements';
import { Achievements_en } from './components/achievements_en';
import { Links } from './components/links';
import { Links_en } from './components/links_en';
import { ContactMe } from './components/contactme';
import { ContactMe_en } from './components/contactme_en';
import { NewsItem } from './components/NewsItem';
import { NewsItem_en } from './components/NewsItem_en';
import { NewsList } from './components/NewsList';
import { NewsList_en } from './components/NewsList_en';
import { TipsItem } from './components/TipsItem';
import { TipsItem_en } from './components/TipsItem_en';
import { TipsList } from './components/TipsList';
import { TipsList_en } from './components/TipsList_en';
import React, { useEffect, useState } from 'react';
import { LAST_UPDATE } from './lastUpdate';
import Helmet from 'react-helmet';
import { Sun, Moon } from 'lucide-react';

// ページ遷移にフェードイン・アウトのアニメーションを適用
const routes = {
  ja: [
    { path: '/', name: 'Home', Component: Home },
    { path: '/aboutme', name: 'About Me', Component: AboutMe },
    { path: '/researches', name: 'Research', Component: Researches },
    { path: '/achievements', name: 'Achievements', Component: Achievements },
    { path: '/links', name: 'Links', Component: Links },
    { path: '/contactme', name: 'Contact Me', Component: ContactMe },
    { path: '/tips', name: 'Tips', Component: TipsList },
    { path: '/tips/:id', name: 'Tips Item', Component: TipsItem },
    { path: '/news/:id', name: 'News Item', Component: NewsItem },
    { path: '/news', name: 'News List', Component: NewsList },],
  en: [
    { path: '/en', name: 'Home', Component: Home_en },
    { path: '/en/aboutme', name: 'About Me', Component: AboutMe_en },
    { path: '/en/researches', name: 'Research', Component: Researches_en },
    { path: '/en/achievements', name: 'Achievements', Component: Achievements_en },
    { path: '/en/links', name: 'Links', Component: Links_en },
    { path: '/en/contactme', name: 'Contact Me', Component: ContactMe_en },
    { path: '/en/tips', name: 'Tips', Component: TipsList_en },
    { path: '/en/tips/:id', name: 'Tips Item', Component: TipsItem_en },
    { path: '/en/news/:id', name: 'News Item', Component: NewsItem_en },
    { path: '/en/news', name: 'News List', Component: NewsList_en },],
};

function App() {
  let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  // }, [darkMode]);

  // const toggleDarkMode = () => setDarkMode(!darkMode);

  const [darkMode, setDarkMode] = useState(() => {
    // ローカルストレージから設定を読み込む
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    // システムのカラースキーム設定を監視
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      const systemPrefersDark = e.matches;
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode === null) {
        setDarkMode(systemPrefersDark);
      }
    };

    // 初期設定
    handleChange(mediaQuery);

    // イベントリスナーを追加
    mediaQuery.addEventListener('change', handleChange);

    // クリーンアップ関数
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // ダークモードの状態が変更されたらローカルストレージに保存
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    // body クラスを更新
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  const [lang, setLang] = useState(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      return storedLang;
    } else {
      const pathname = window.location.pathname;
      return pathname.startsWith('/en') ? 'en' : 'ja';
    }
  });

  useEffect(() => {
    const currentPath = location.pathname;
    const newLang = currentPath.startsWith('/en') ? 'en' : 'ja';
    if (newLang !== lang) {
      setLang(newLang);
      localStorage.setItem('lang', newLang);
    }
  }, [location, lang]);

  const navigate = useNavigate();

  const handleLanguageChange = () => {
    const newLang = lang === 'ja' ? 'en' : 'ja';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    const currentPath = location.pathname;
    const newPath = newLang === 'en' ? `/en${currentPath}` : currentPath.replace(/^\/en/, '');
    navigate(newPath);
    setIsOpen(false);
  };


  // useEffect(() => {
  //   const currentRoute = routes[lang].find(route => route.path === location.pathname);
  //   if (currentRoute) {
  //     if (currentRoute.name === 'Home') {
  //       // 言語に応じてタイトルを変更
  //       document.title = lang === 'ja' ? '中井 大 (Dai Nakai) 京都工芸繊維大学大学院' : 'Dai Nakai, Kyoto Institute of Technology';
  //     } else if (currentRoute.name !== 'News Item' && currentRoute.name !== 'Tips Item') {
  //       document.title = lang === 'ja' ? `${currentRoute.name} | 中井 大 (Dai Nakai) 京都工芸繊維大学大学院` : `${currentRoute.name} | Dai Nakai, Kyoto Institute of Technology`;
  //     }
  //   }
  // }, [location]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='header_title'><NavLink exact to={lang === 'ja' ? '/' : '/en'} className="header_link_title" onClick={() => setIsOpen(false)}>Dai Nakai</NavLink></h1>
        <nav className="header_nav">
          <ul className='header_menu'>
            {routes[lang].slice(1, 7).map(route => (
              <li key={route.path}>
                <NavLink
                  to={route.path}
                  className="header_link"
                  activeClassName="header_active_link"
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
            <li>
              <span
                onClick={handleLanguageChange}
                className="header_link"
                style={{ cursor: 'pointer' }}
              >
                {lang === 'ja' ? '🇬🇧English' : '🇯🇵日本語'}
              </span>
            </li>
            <li>
              <button onClick={toggleDarkMode} className="dark-mode-toggle">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
          </ul>
        </nav>
        <div className={`hamburger_menu ${isOpen ? 'open' : ''}`} onClick={handleHamburgerClick}>
          <div className="hamburger_menu_line"></div>
          <div className="hamburger_menu_line"></div>
          <div className="hamburger_menu_line"></div>
        </div>
      </header>

      <nav className={`mobile_menu ${isOpen ? 'open' : ''}`}>
        <ul>
          {routes[lang].slice(1, 7).map(route => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className="header_link"
                activeClassName="header_active_link"
                onClick={() => setIsOpen(false)}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
          <li>
            <span
              onClick={handleLanguageChange}
              className="header_link"
              style={{ cursor: 'pointer' }}
            >
              {lang === 'ja' ? '🇬🇧English' : '🇯🇵日本語'}
            </span>
          </li>
          <li>
              <button onClick={toggleDarkMode} className="dark-mode-toggle">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
        </ul>
      </nav>

      <div className={`App-body ${isOpen ? 'open' : ''}`}>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames="fade"
          >
            <Routes location={location}>
              {Object.entries(routes).map(([_, languageRoutes]) =>
                languageRoutes.map(({ path, Component }) => (
                  <Route key={path} path={path} element={<Component />} />
                ))
              )}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
        <footer className="App-footer">
          <p className='footer_text'>Latest update: {LAST_UPDATE}
           © 2024 Dai Nakai</p>
        </footer>
    </div>
  );
}

export default App;