import React from 'react';
import ReactDOM from 'react-dom';
import { useRoutes } from 'hookrouter';
import * as serviceWorker from './serviceWorker';

import routes from './router';
import Header from './components/header/header';
import NoPageFound from './components/NoPageFound';

import './index.css';

function App() {
  const routeResult = useRoutes(routes);
  return (
    <div className="App">
      <Header />
      {routeResult || <NoPageFound />}
    </div>
  );
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
serviceWorker.unregister();
