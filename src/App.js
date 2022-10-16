import { BrowserRouter } from "react-router-dom";
import RoutTo from "./RoutTo";
import "./Style/_main.scss";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutTo />
      </BrowserRouter>
    </div>
  );
}

export default App;
