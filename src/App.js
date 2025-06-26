import './App.css';
import Navbar from './AllMenuComp/navbar';
import Home from './AllMenuComp/Home/home';
import About from './AllMenuComp/About/about';
import Info from './AllMenuComp/Info/info';
import Skills from './AllMenuComp/Skills/skills';
import Resume from './AllMenuComp/Resume/resume';
import Service from './AllMenuComp/Services/service';
import Contact from './AllMenuComp/Contacts/contact';
import Footer from './AllMenuComp/Footer/footer';

function App() {
  return (
    <div className="App">
         <Navbar/>
         <Home/>
         <About/>
         <Info/>
         <Skills/>
         <Resume/>
         <Service/>
         <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
