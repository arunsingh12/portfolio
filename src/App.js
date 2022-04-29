
import './App.css';
import Experience from './components/Experience/Experience';
import Intro from './components/Intro/Intro';
import Navbar from "./components/Navbar/Navbar";
import Services from './components/Services/Services';
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonials/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
