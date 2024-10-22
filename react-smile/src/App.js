import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Component from './components/Hello'
import Learning from './components/Learning'
import Hook from './components/Hook'
import Check from './components/Check'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>test </p>
        <h1>Hello Mehedi</h1>
        <Component />
        <Learning />

        <Component name='Mango' weight='20gm'/>
        <Component name='Apple' weight='120gm'/>
        <Component name='Orange' weight='500gm'/>
        <p>Hook</p>
        <Hook />
        <p>Check </p>
        <Check />
      </header>

      <div>
        <p>test </p>
      </div> */}

      <h1>this is our home components</h1>
    </div>
  );
}

export default App;
