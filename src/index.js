import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import lo from "./pre-loader.gif"
const root = ReactDOM.createRoot(document.getElementById('root'));

const LoadingSpinner = () => (
  <div className="loader-container">
    {/* <div className="spinner"></div> */}
    <img src={lo} />
  </div>
);

const MainApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <React.StrictMode>
      {loading ? <LoadingSpinner /> : <App />}
    </React.StrictMode>
  );
};

root.render(<MainApp />);

reportWebVitals();
