import logo from './logo.svg';
import './App.css';
import Component from './components/Hello'
import Learning from './components/Learning'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>test </p>
        <h1>Hello Mehedi</h1>
        <Component />
        <Learning />

        <Component name='Mango' weight='20gm'/>
        <Component name='Apple' weight='120gm'/>
        <Component name='Orange' weight='500gm'/>
      </header>

      <div>
        <p>test </p>
      </div>
    </div>
  );
}

export default App;
