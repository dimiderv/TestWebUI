import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import ReadAsset from './components/ReadAsset';
import RetailerFrontPage from './components/RetailerFrontPage'
import SupermarketFrontPage from './components/SupermarketFrontPage'


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import FarmerFrontPage from './components/FarmerFrontPage';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/farmerFrontPage" exact component={FarmerFrontPage} />
            <Route path="/readAsset" exact component={ReadAsset} />
            <Route path="/retailerFrontPage" exact component={RetailerFrontPage} />
            <Route path="/supermarketFrontPage" exact component={SupermarketFrontPage} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
