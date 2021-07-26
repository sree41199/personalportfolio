import React, {Component} from 'react';
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer';
import ContactUs from '../pages/ContactUs/ContactUs';
import Home from '../pages/Home/Home';
import Gallery from '../pages/Gallery/Gallery';
import { Route,BrowserRouter as Router,Switch } from  'react-router-dom'; 

class Routes extends Component{
    render() {
        return(
            <Router>
            <div>
             <Header/>
            </div>
            <Switch>
            <Route exact path="/contactus" component={ContactUs}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/gallery" component={Gallery}/>
            </Switch>
            <div>
          <Footer/> 
          </div>
          </Router>
        );
        }
}
export default Routes;