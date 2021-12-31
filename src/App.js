import logo from './logo.svg';
import './App.css';
import { Ampligram } from './ui-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Ampligram />
    </div>
  );
}

export default App;
