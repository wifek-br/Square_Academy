import Home from "./Containers/Home/Home";
import Contact from "./Containers/Contact/Contact";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Connexion from "./Containers/Connexion/Connexion";
 import Economie from "./Containers/DomaineOfStudy/Economie";
import Informatique from "./Containers/DomaineOfStudy/Informatique";
import Gestion from "./Containers/DomaineOfStudy/Gestion";
import Footer from "./Components/Footer";
import Inscription from "./Containers/Connexion/Inscription";
import ListeUsersInscrits from "./Containers/SuperAdmine/ListeUsersInscrits";
import {OnlineTraining} from "./Containers/SuperAdmine/addMultimédiaTraining/OnlineTraining";
import ShowTraining from "./Containers/SuperAdmine/addMultimédiaTraining/ShowTraining";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/connexion" exact component={Connexion} />
          <Route path="/inscription" exact component={Inscription} />
          <Route path="/gestion" exact component={Gestion} />
          <Route path="/listeFormations" exact component={OnlineTraining} />
          <Route path="/economie" exact component={Economie} />
          <Route path="/informatique" exact component={Informatique} />
          <Route path="/gestion" exact component={Gestion} />
          <Route
            path="listeUsersInscrits"
            exact
            component={ListeUsersInscrits}
          />
          <Route path="/showTraining" exact component={ShowTraining}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
