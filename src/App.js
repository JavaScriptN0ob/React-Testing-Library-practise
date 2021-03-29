// import logo from
import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  // No matter found Capital letter A-Z between colorName(\Bxxx\B),
  // replace with the space you found($1) with a ' ';
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
  const [ buttonColor, setButtonColor ] = useState('MediumVioletRed');
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
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
          backgroundColor: checkboxStatus ? 'gray' : buttonColor
        }}
        onClick={() => {
          setButtonColor(newButtonColor)
        }}
        disabled={checkboxStatus}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <label
        htmlFor="disable-button-checkbox"
      >
        Disable button
      </label>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        checked={checkboxStatus}
        onChange={(e) => setCheckboxStatus(e.target.checked)}
      />
    </div>
  );
}

export default App;
