import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
// import './App.css';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import './styles.scss';
import Home from './components/Home';
import { HeartSpinner } from 'react-spinners-kit';

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
  <div className="App">
    { loading ? (
      <div className="loading-page">
      <HeartSpinner
      size={30}
      color="#fefefe"
      loading={loading}
      />
    </div>
    ) : ( <Home />)}
  </div>
  );
}

export default App;
