import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() { 
  const [firstName , setFirstName] = useState('');
  const [lastName , setLastName] = useState('');
  const fullName = firstName + ' ' + lastName ;

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }
  const handleSecondNameChange = (e) => {
    setLastName(e.target.value)
  }
  return (
    <div className="App-header">
      <h5>Let’s check you in</h5>
      <label>
        First Name : {''}
        <input 
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Second Name : {''}
        <input 
          value={lastName}
          onChange={handleSecondNameChange}
        />
      </label>
      <div>
        Full Name : {fullName}
      </div>
    </div>
  );
}

export default App;



