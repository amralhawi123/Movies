
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './Reudx/store/store';
import { Provider } from 'react-redux';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);