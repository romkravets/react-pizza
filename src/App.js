import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import './scss/app.scss'
import {Header} from "./components";
import {Home, Cart} from './pages';

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
      axios.get('http://localhost:3000/db.json').then(({data}) => {
         setPizzas(data.pizzas);
      });
  }, []);

  return (
      <div className="wrapper">
            <Header />
          <div className="content">
            <Route exact path="/" render={() => <Home items={pizzas}/>}/>
            <Route path="/cart" component={Cart}/>
          </div>
      </div>
);
}

export default App;
