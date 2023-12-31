import './App.css';
import Header from './components/header.js'; 
import Hero from './components/hero.js'; 
import About from './components/about.js'; 
import Steps from './components/steps.js';
import Projects from './components/projects.js'; 
import Testimonials from './components/testimonials.js'; 
import Form from './components/form.js'; 
import Footer from './components/footer.js'; 


function App() {
  return (
	<div>
		<Header/>
		<Hero/>
		<About/>
		<Steps/>
		<Projects/>
		<Testimonials/>
		<Form/>
		<Footer/>
	</div>
  );
}

export default App;
