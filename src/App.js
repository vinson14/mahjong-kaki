import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
    <Router>
        <Switch>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
);

export default App;
