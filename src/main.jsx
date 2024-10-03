import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import '../src/css/bootstrap.min.css';
import '../src/css/select2.min.css';
import '../src/css/elements.css';
import 'font-awesome/css/font-awesome.min.css';
import '../src/css/jquery.datetimepicker.css';
import '../src/css/magnific-popup.css';
import '../src/css/main.css';
import '../src/css/meanmenu.min.css';
import '../src/css/normalize.css';
import '../src/assets/style.css';
import '../src/css/font/flaticon.css';
import '../src/css/animate.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
