import logo from './logo.svg';
import './App.css';
import SimpleUseState from './components/useState-hook/SimpleUseState';
import UseStateWithObject from './components/useState-hook/UseStateWithObject';
import UseStateWithArray from './components/useState-hook/UseStateWithArray';
import UseStateInHeavyOpration from './components/useState-hook/UseStateInHeavyOpration';
import UseEffect from './components/useState-hook/UseEffect'
function App() {
  return (
    <div className="App">
      {/* <SimpleUseState/> */}
      {/* <UseStateWithObject/> */}
      {/* <UseStateWithArray/> */}
      {/* <UseStateInHeavyOpration/> */}
      <UseEffect/>
    </div>
  );
}

export default App;
