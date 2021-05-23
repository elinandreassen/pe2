import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext";
import Navigation from "./components/layout/nav";
import Home from "./components/home/homePage";
import Hotels from "./components/hotels/hotelsPage"
import HotelsDetails from "./components/hotels/hotelDetails";
import Login from "./components/login/login";
import Admin from "./components/admin/adminPage";
import Contact from "./components/contact/contact";



function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/places">
            <Hotels />
          </Route>
          <Route exact path="/hotels/:id">
            <HotelsDetails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/adminPage">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;