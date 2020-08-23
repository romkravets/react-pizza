import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import './scss/app.scss'
import {Header} from "./components";
import {Home, Cart} from './pages';

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
      fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setPizzas(json.pizzas);
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
