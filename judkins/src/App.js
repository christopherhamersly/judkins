import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/GlobalStyle/globalStyle';
import { lightTheme, darkTheme } from './components/Theme/theme'
import  {useDarkMode} from './components/DarkMode/darkmode'
import Toggle from './components/Toggler/toggler'

import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Home from './components/Home/home'
import Futsal from './components/Futsal/futsal'
import Polo from './components/Polo/polo'
import RollerSkating from './components/RollerSkating/rollerSkating'
import Contact from './components/Contact/contact'
import History from './components/History/history'
import RollerHockey from './components/RollerHockey/rollerHockey'
import Rules from './components/Rules/rules'

function App() {

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (

    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Header />
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <Switch>
            <Route path='/roller-hockey'>
              <RollerHockey />
            </Route>
            <Route path='/rules'>
              <Rules />
            </Route>
            <Route path='/history'>
              <History />
            </Route>
            <Route path='/bike-polo'>
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
    </ThemeProvider>
  );
}

export default App;
