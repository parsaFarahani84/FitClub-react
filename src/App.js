import "./App.css";
import Hero from "./components/Hero";
import Programs from "./components/Program/Programs";
import Reasons from './components/Reasons/Reasons'
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
    </div>
  );
}

export default App;
