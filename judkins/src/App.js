import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Home from './components/Home/home'
import Futsal from './components/Futsal/futsal'
import Polo from './components/Polo/polo'
import RollerSkating from './components/RollerSkating/rollerSkating'
import Contact from './components/Contact/contact'
import History from './components/History/history'
import RollerHockey from './components/RollerHockey/rollerHockey'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/rollerhockey'>
            <RollerHockey />
          </Route>
          <Route path='/history'>
            <History />
          </Route>
          <Route path='/polo'>
            <Polo />
          </Route>
          <Route path='/futsal'>
            <Futsal />
          </Route>
          <Route path='/skating'>
            <RollerSkating />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
