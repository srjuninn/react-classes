import logo from './logo.svg';
import './App.css';

function App() {

  // var name = 'ryan'
  // let lastName = 'silva'
  // const middleName = 'ferreira da silva nunes santos'
  // let fatiarTesto = middleName.split(" ")
  // console.log(fatiarTesto);
  // console.table(fatiarTesto) 
  let fullName = "Ryan Ferreira da Silva"
  let arrayString = fullName.split(" ")
  let name = arrayString[0]
  let lastName = arrayString[arrayString.length - 1]
  console.log(name);
  console.log(lastName);
  console.log(`olá ${name} ${lastName}`);
  
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          {`hello ${name} ${middleName} ${lastName}`}
        </p>
        <p>{fatiarTesto}</p> */}
        <p>{`hello ${name} ${lastName}`}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
