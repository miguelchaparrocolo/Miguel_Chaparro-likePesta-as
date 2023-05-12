import './app.css';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Header from './Components/header';
import About from './pages/about';

function App (){
  return(
    <div className='elements'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;