import './App.css';
import {useEffect} from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Skills from './components/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    document.title = 'Leonardo Francisco';
    AOS.init();
  }, []);
return (
  <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
    <Navbar />
    <Home />
    <Skills />
    {/* <Honors />
    <Certs /> */}
    <Footer />
  </div>
);
}

export default App;
