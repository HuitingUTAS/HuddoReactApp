import './App.css';
import BoardsFetch from './BoardsFetch.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
          <BoardsFetch />
        </div>
      </header>
    </div>
  );
}

export default App;
