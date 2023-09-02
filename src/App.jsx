// import './App.css';
import { useState } from 'react';
import Header from './components/header';
import Footer from './components/Footer';
import MaybeAboutMe from './pages/MaybeAboutMe';
import MaybeContact from './pages/MaybeContact';
import MaybeResume from './pages/MaybeResume';
import PortfolioPage from './pages/portfolio';
import 'bulma/css/bulma.min.css'

function App() {
  
  const [page, setPage] = useState('about me')
  const foods = ['pizza', 'burgers', 'chicken']

  function display() {
    if (page === 'about me') {
      return (<MaybeAboutMe />)
    } else if (page === 'contact') {
      return (<MaybeContact/>)
    } else if (page === 'resume'){ 
      return (<MaybeResume/>)
    } else if (page === 'portfolio'){
      return (<PortfolioPage/>)
    }
  }

  return (
    <div className="portfolio-app">
      <Header setPage={setPage}/>
      {display()}
      <Footer/>
    </div>
  );
}

export default App;
