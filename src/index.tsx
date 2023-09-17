import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import { App } from './components/App';

import { store } from './stores/store';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);