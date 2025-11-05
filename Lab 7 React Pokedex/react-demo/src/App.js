import logo from './logo.svg';
import './App.css';

function Pokemon(props) {               
        return <div class="Pokemon"> <h1> {props.name} </h1>
        <h2> {props.type} </h2>
        <img src={props.image}></img> 

        </div>;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Pokemon name="Pikachu" image="Pikachu.png" type="Electric"/>
       <Pokemon name="Meowth" image="Meowth.png" type="Normal"/>
       <Pokemon name="Snom" image="snom.png" type="Ice & Bug"/>
       <Pokemon name="Bisharp" image="bisharp.png" type="Dark & Steel"/>
      </header>
    </div>
  );
}

export default App;
