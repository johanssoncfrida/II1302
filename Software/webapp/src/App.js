import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CurrentMessage from "./presenters/currentMessage";
import NewMessage from "./presenters/newMessage";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/currentmessage" component={CurrentMessage} />
        <Route exact path="/" component={NewMessage} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
