import { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MenuHamburger from './components/Header/Menu';
import "@fontsource/montserrat";
import Mainpage from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import ScientificWork from './pages/ScientificWork';
import AE from './pages/AE';
import BusinessDevelopment from './pages/BusinessDevelopment';
import Login from './pages/Login';
import Contact from './pages/Contact';
import DataProtection from './pages/SubPages/DataProtection';
import Impressum from './pages/SubPages/Impressum';
import TermsandConditions from './pages/SubPages/TermsandConditions';

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
        <Route path='/AE' element={<AE />} />
        <Route path='/BusinessDevelopment' element={<BusinessDevelopment />} />
        <Route path='/scientific-work' element={<ScientificWork />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/DataProtection' element={<DataProtection />} />
        <Route path='/Impressum' element={<Impressum />} />
        <Route path='/TermsandConditions' element={<TermsandConditions />} />
        <Route path='*' element={<Mainpage />} />
      </Routes>
    </ParallaxProvider>
  );
}

export default App;
