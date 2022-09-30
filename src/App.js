import {  useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MenuHamburger from './components/Header/Menu';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import "@fontsource/montserrat"; // Defaults to weight 400.

function App() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = './js/js.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <ParallaxProvider>
      <MenuHamburger />
      <div id="page-wrap" >
        <Header />
        <Main />
      </div>
    </ParallaxProvider>
  );
}

export default App;
