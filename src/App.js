import React from 'react';
import { Helmet } from 'react-helmet';
import BasicExample from './routes/base';
import ParamsExample from './routes/urlParams';
import AuthExample from './routes/Redirects';
import './App.css';
import Button from './components/Button';
function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Titlewerwe</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <header className="App-header">
        <BasicExample />
        <ParamsExample />
        <AuthExample />
        <Button />
      </header>
      fa-times-rectangle
    </div>
  );
}

export default App;
