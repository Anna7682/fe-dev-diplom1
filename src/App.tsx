import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/common.scss';
import Error404 from './components/Error404/Error404';
import { Wrapper } from './components/Wrapper';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { LandingPage } from './components/LandingPage';
import { Success } from './components/Success';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { SelectionScreen } from './components/SelectionScreen';
import { Loading } from './components/Loading';

export const appURL = '/fe-dev-diplom';
export const serverURL = 'https://fe-dev-diplom1.onrender.com';

function App(): ReactElement {
  return (
    <Router basename={appURL}>
      <Switch>
        <Route exact path="/" component={Wrapper} />
        <Route path="/about.html" exact component={Error404} />
        <Route path="/contacts.html" exact component={Error404} />
        <Route path="/catalog.html" exact component={Error404} />
        <Route path="/items/:id.html" exact component={Error404} />
        <Route path="/cart.html" exact component={Error404} />
        <Route path="*" component={Error404} /> CartIcon
      </Switch>
    </Router>
  );
}

export default App;
