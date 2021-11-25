import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Button from './components/button';

function App() {
  return (
    <div className="App">
      <Header title='How are you'/>

      <Header NULL/> 

      <button color='blue' text='click Me' />
    </div>
  );
}

export default App;
