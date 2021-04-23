import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CurrentMessage from "./presenters/CurrentMessage";
import NewMessage from "./presenters/NewMessage";
import HomePage from "./presenters/HomePage";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path = "/" component={HomePage} />
        <Route path="/currentmessage" component={CurrentMessage} />
        <Route path="/newmessage" component={NewMessage} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
