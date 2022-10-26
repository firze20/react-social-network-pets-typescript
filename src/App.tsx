import React, { useState } from 'react';

import {Profile, Directory} from './components';
import './App.css';

function App() {
  
  const[username, setUsername] = useState<string | null>(null);

  const handleChoose = (newUsername: string): void  =>  {
      setUsername(newUsername);
  }

  const handleReturnDirectoryClick = (): void => {
    setUsername(null);
  }

  let body;

  if (username) {
    body = <Profile username={username} onChoose={handleChoose} />;
  } else {
    body = <Directory onChoose={handleChoose} />
  }


  return (
    <div className="App">
    <header>
      <h1>PetBook</h1>
      <nav>
        {username && (
          <button onClick={handleReturnDirectoryClick}>
            Return to directory
          </button>
        )}
      </nav>
    </header>
    <main>{body}</main>
  </div>
  );
}

export default App;
