import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Payment from './Payment';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './Firebase';
import { useStatevalue } from './StateProvider';
import { loadStripe} from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import React from 'react';

const promise = loadStripe('pk_test_51MhHPYSIU91BzBBySpqw2pt73Qt8dt79iyB96eiGTONHXaBT5jIdfHU1RtIoO6zzrEg7kZrSaI1r2fp6cEiQjPFe00YcixKB82');

function App() {

  const [{}, dispatch] = useStatevalue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
        //authUser will bw thw user who currently logged in the amazon

        if(authUser){
          //logged in user
          dispatch({
            type: 'SET_USER',
            user: authUser
          })

        }else{
          //loggde out user

          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
    })
  }, [])


  return (
    <Router>
      {/* <Header /> */}
      <div className="app">
        <Routes>
          <Route path='/login' element={ <Login />} />
          <Route path='/checkout' element={ 
            <React.Fragment>
              <Header/>
              <Checkout/>
            </React.Fragment>
          }/>

          <Route path='/payment' element={ 
            <React.Fragment>
              <Header/>
              <Elements stripe={promise}>
                <Payment/>
              </Elements> 
            </React.Fragment>
          }/>

          <Route path='/' element={ 
            <React.Fragment>
               <Header/>
                <Home />  
            </React.Fragment>
          } />
          
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
