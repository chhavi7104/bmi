import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>BMI Calculator</h1>
     <form>
      <div>
        <label>Weight: </label>
        <input type="text" name="weight" placeholder="Enter Weight Value"  />
        </div>
        <div>
        <label>Height: </label>
        <input type="text" name="height:  "  placeholder="Enter height Value" />
        </div>
        <div>
        <button>Calculate</button>
        </div>
     </form>
    </div>
  );
}

export default App;
