import React, { useState } from 'react';

import './App.css';
import Toast from './components/toast/Toast';
import Button from './components/button/Button';

const BUTTON_PROPS = [
  {
    id: 1,
    type: 'simple',
    className: 'simple',
    label: 'Simple'
  },
  {
    id: 2,
    type: 'success',
    className: 'success',
    label: 'Success'
  },
  {
    id: 3,
    type: 'danger',
    className: 'danger',
    label: 'Danger'
  },
  {
    id: 4,
    type: 'warning',
    className: 'warning',
    label: 'Warning'
  },
];

const App = () => {
  const [list, setList] = useState([]);
  const [position, setPosition] = useState('Select Position');
  let toastProperties = null;

  const selectPosition = (e) => {
    setPosition(e.target.value);
    setList([]);
  }

  const showToast = type => {
    const id = Math.floor((Math.random() * 101) + 1);

    switch(type) {
      case 'simple':
        toastProperties = {
          id,
          title: 'Simple Alert Message',
          backgroundColor: '#ebebeb',
          borderColor: "#6c6c6c",
        }
        break;
      case 'success':
        toastProperties = {
          id,
          title: 'Success Alert Message',
          backgroundColor: '#a8f1c6',
          borderColor: "#1b8145",
        }
        break;
      case 'danger':
        toastProperties = {
          id,
          title: 'Danger Alert Message',
          backgroundColor: '#f6a6a3',
          borderColor: "#8f110e",
        }
        break;
      case 'warning':
        toastProperties = {
          id,
          title: 'Warning Alert Message',
          backgroundColor: '#ffd38a',
          borderColor: "#885603",
        }
        break;

        default:
          setList([]);
    }

    setList([...list, toastProperties]);
  }

  return (
    <div className="app">
      <div className="app-header">
        <div className="toast-buttons">
          {
            BUTTON_PROPS.map(e => 
              <Button 
                key={e.id}
                className={`${position === 'Select Position' ? `${e.className} btn-disable` : `${e.className}`}`}
                label={e.label}
                handleClick={() => showToast(e.type)}
              />
            )
          }
        </div>
        <br />
        <div className="select">
          <select
            name="position"
            value={position}
            onChange={selectPosition}
            className="position-select"
          >
            <option>Select Position</option>
            <option value="top-right">Top Right</option>
            <option value="top-left">Top Left</option>
            <option value="bottom-left">Bottom Left</option>
            <option value="bottom-right">Bottom Right</option>
          </select>
        </div>
      </div>

      <Toast 
        toastList={list}
        position={position}
      />
      {console.log(list)}
    </div>
  );
}

export default App;
