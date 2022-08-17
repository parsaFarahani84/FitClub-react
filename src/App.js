import "./App.css";
import Hero from "./components/Hero";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Program/Programs";
import Reasons from "./components/Reasons/Reasons";
import Testimonials from "./components/Testimonials/Testimonials";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
    </div>
  );
}

export default App;
