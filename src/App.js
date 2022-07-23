import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar"; 
import SocialLinks from "./components/SocialLinks";



function App() {
  return (
 <div>
  <NavBar />
  <Home />
  <SocialLinks/>
  <About />
  <Education/>
  <Experience/>
<Contact/> 
 </div>
  );
}

export default App;
