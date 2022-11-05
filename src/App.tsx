import logo from './logo.svg';
import './App.sass';
import { upperCase } from "lodash";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color: "#000", marginLeft: "4rem", fontWeight: "bold"}}>
          {
            `{ ${upperCase("Edit and save to reload")} }`
          }
        </p>
      </header>
    </div>
  );
}

export default App;
