import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Feedback from './Components/Feedback'; // Correct import with capital F

function App() {
  return (
    <div>
      <Feedback /> {/* Capitalized component name */}
    </div>
  );
}

export default App;
