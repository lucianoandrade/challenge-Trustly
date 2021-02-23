import React from 'react';
import Routes from './pages/routes';
import { GlobalStorage } from './components/GlobalContext';

function App() {
    return (
      <div>
        <GlobalStorage>
            <Routes />
        </GlobalStorage>
      </div>
    );
  }
  
export default App;
