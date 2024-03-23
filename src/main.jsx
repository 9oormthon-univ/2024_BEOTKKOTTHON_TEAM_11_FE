import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import dayjs from 'dayjs';

// DateRangePicker
import 'react-date-range/dist/styles.css';
import './date-picker-theme.css';

import 'dayjs/locale/ko';
dayjs.locale('ko'); // use locale globally

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
