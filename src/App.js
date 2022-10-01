import { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MenuHamburger from './components/Header/Menu';
import "@fontsource/montserrat";
import Mainpage from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import ScientificWork from './pages/ScientificWork';

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
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/scientific-work' element={<ScientificWork />} />
        <Route path='*' element={<Mainpage />} />
      </Routes>
    </ParallaxProvider>
  );
}

export default App;
