import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CurrentMessage from "./presenters/currentMessage";
import NewMessage from "./presenters/newMessage";
import HomePage from "./presenters/homePage"
import Header from './presenters/header';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
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
