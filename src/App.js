import React, {useState, useEffect, useLayoutEffect} from 'react';
import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalStyle from './globalStyles';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages';
import Quote from './pages/Quote';
import Fav from './pages/Fav';
import Inspi from './pages/Inspi';
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {
  const[isOpen, setIsOpen] = useState(false);
  const location = useLocation()

  const toggle = () => {
  setIsOpen(!isOpen);
};

useLayoutEffect(() => {
    window.scrollTo(0,0)
}, [location.pathname])

useEffect(() => {
  Aos.init({})
}, [])


  return (
    <>
    <GlobalStyle />
    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/quote" component={Quote} />
      <Route path="/fav" component={Fav} />
      <Route path="/inspi" component={Inspi} />
    </Switch>
    <Footer />
  </>

  );
}

export default App;
