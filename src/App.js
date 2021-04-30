import Home from "./Components/Home";
import View from "./Components/View";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/view" component={View}/>
     </Switch>
   </BrowserRouter>
    </div>
  );
}

export default App;
