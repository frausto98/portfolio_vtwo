// import './App.css';
import { useState } from 'react';
import Header from './components/header';
import MaybeAboutMe from './pages/MaybeAboutMe';
import MaybeContact from './pages/MaybeContact';

function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState('hello')
  const foods = ['pizza', 'burgers', 'chicken']

  function display() {
    if (item === 'hello') {
      return (<MaybeAboutMe />)
    } else if (item === 'goodbye') {
      return (<MaybeContact/>)
    } else {

      return (foods.map(item=> (
        <h2>{item}</h2>
      )))
    }
  }
  return (
    <div className="portfolio-app">
      <Header count={count} setCount={setCount} setItem={setItem}/>
      <h1>{count}</h1>
      {display()}
    </div>
  );
}

export default App;
