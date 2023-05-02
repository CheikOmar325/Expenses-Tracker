import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tabulator-tables/dist/css/tabulator.min.css';
import 'react-tabulator/lib/styles.css';

// Workaround to suppress ResizeObserver loop limit exceeded error
const resizeObserverLoopErrRe = /^ResizeObserver loop limit exceeded/;
const originalConsoleError = console.error;
console.error = function (msg, ...args) {
  // Ignore ResizeObserver loop limit exceeded error
  if (typeof msg === 'string' && resizeObserverLoopErrRe.test(msg)) {
    return;
  }
  // Log all other errors
  originalConsoleError.call(this, msg, ...args);
};
// End of workaround

// Render the root React component
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
