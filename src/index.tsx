import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './config/i18n';
import './index.scss';

const Index = () => (
  <React.StrictMode>
    <Suspense fallback={<p>loading .....</p>}>
      <App />
    </Suspense>
  </React.StrictMode>
);

ReactDOM.render(<Index />, document.getElementById('root'));

if (import.meta.hot) {
  import.meta.hot.accept();
}
