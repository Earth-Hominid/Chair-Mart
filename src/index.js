import App from './App';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
