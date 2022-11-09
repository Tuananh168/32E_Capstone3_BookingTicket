
import { BrowserRouter } from "react-router-dom"
import Routers from "./router/Routers";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory()
  return (
    <div>
      <BrowserRouter>
        <Routers history={history} />
      </BrowserRouter>
    </div>
  );
}

export default App;
