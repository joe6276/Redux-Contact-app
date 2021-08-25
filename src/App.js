import { ToastContainer } from "react-toastify";
import Navbar from "./components/Nav/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home.jsx";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/edit/:id" component={EditContact} />

        <Route  path="/add" component={AddContact} /> 

      </Switch>
    </div>
  );
}

export default App;
