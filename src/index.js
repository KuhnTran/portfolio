import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import * as serviceWorker from './serviceWorker';

const options = {
  // you can also just use 'bottom center'
  position: positions.CENTER,
  timeout: 10000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.FADE
}
const customAlertStyle = {
  width: '400px',
  borderRadius: '10px',
  backgroundColor: '#333333',
  color: 'white',
  transformText: 'none',
  padding: '1em',
  paddingLeft: '2em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'left',
}

const closeButtonStyle = {
  backgroundColor: '#333333',
  color: 'white',
  border: 'none',
  width: '100px',
  marginTop: '20px',
}

const OtherAlertTemplate = ({ style, options, message, close }) => (
  <div style={{...style, ...customAlertStyle}}>
    {message}
    <button style={closeButtonStyle} onClick={close}>Close</button>
  </div>
)

ReactDOM.render(
  <React.StrictMode>
      <AlertProvider template={OtherAlertTemplate} {...options}>
          <App />
      </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
