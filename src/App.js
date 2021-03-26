// import logo from
import { useState } from 'react';
import './App.css';

function App() {
  const [ buttonColor, setButtonColor ] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const [checkboxStatus, setCheckboxStatus] = useState(false);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      height: '30vh',
      alignItems: 'center',
    }}>
      <button
        style={{
          backgroundColor: buttonColor,
        }}
        onClick={() => {
          setButtonColor(newButtonColor)
        }}
        disabled={checkboxStatus}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        checked={checkboxStatus}
        onChange={(e) => setCheckboxStatus(e.target.checked)}
      />
    </div>
  );
}

export default App;
