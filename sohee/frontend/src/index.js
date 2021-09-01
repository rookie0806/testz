import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import {Provider} from "react-redux";
import store, {history} from "./redux/configureStore";
import {ConnectedRouter} from "connected-react-router";

import './index.css';
import App from './components/App';

ReactDOM.render(
    
    <Provider store={store}>
          <Helmet>
                <title>0isohee.com</title>
                <meta name="description" content="0isohee" data-react-helmet="true"/>
          </Helmet>
        <ConnectedRouter history={history}>
        <App />
       
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root')
);
