import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio';
import Experience from './components/experience/Experience'
import About from './components/about/About'

function App() {
  return (
    <div className='root'>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
