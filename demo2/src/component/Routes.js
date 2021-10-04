import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "./addUser";
import Home from "./home";
import NavBar from "./navbar";
import Users from "./users";

export default function Routes(props){
    return(
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/" exact><Home/></Route>
                <Route path="/users" exact><Users {...props}/></Route>
                <Route path="/add" exact><AddUser {...props}/></Route>
                <Route path="/edit/:id" exact><AddUser {...props}/></Route>
            </Switch>
        </Router>
    )
}