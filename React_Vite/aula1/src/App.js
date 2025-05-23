import logo from './logo.svg';
import './App.css';
import Soma from './Soma';

function App() {
    return (
        <div className="App">
            <h1> Calculadora de Soma </h1>
            <Soma numero1={5} numero2={3} />
        </div>
    )
}

export default App;
