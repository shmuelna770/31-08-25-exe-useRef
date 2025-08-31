import "./App.css";
import "./comp/compo";
import Compo from "./comp/compo";
import Counter from "./comp/counter";
import Effect from "./comp/Effect";
import Timer from "./comp/Timer";
import RefTimer from "./comp/RefTimer";
import Clicker from "./comp/Clicker";
function App() {
  return (
    <div>
      <Compo />
      <p>_______________________________________________</p>
      <Effect />
      <p>_______________________________________________</p>
      <Counter />
      <p>_______________________________________________</p>
      <Timer />
      <p>_______________________________________________</p>
      <RefTimer />
      <p>_______________________________________________</p>
      <Clicker/>
    </div>
  );
}

export default App;
