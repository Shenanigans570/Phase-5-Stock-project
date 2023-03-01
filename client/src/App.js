import './App.css';
import { useContext, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Stocks from './components/Stocks';
import Login from './components/Login';
import Favorites from './components/Favorites';
import Account from './components/Account';
import Signup from './components/Signup';
import Portfolio from './components/Portfolio';
import { UserContext } from './context/UserContext';
import 'semantic-ui-css/semantic.min.css'

// import API_KEY from '.src/.env'

function App() {
  const {
    investor, 
    setInvestor,
    fetchAuthorizedUser
    
    } = useContext(UserContext)



    useEffect(() => {
      fetchAuthorizedUser()
    }, [])

    // const fetchData = e => {
    //   fetch('https://financialmodelingprep.com/api/v3/quote-short/Z?apikey=8d97f878401bfb5f3a62d0aa5175f4e0')
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    // }
    // fetchData()

  if(!investor) return <Login setCurrentUser = {setInvestor} />

  return (
    <div className="App">
      <NavBar /> 
        <Routes>
          <Route 
            path='/' 
            element={<Account />}
          />
      
            <Route
              path='/portfolio'
              element={ <Portfolio />}
            >

            </Route>
        
          <Route 
            path='/stocks' 
            element={ <Stocks/> }
          />
          <Route 
            path='/favorites' 
            element={ <Favorites userFavorites={investor.favorites}/> }
          />
          <Route 
            path='/login'
            element={ <Login />}
          />
          <Route 
            path='/signup' 
            element={ <Signup />  }
          />
        </Routes >
    </div>
  );
}

export default App;
