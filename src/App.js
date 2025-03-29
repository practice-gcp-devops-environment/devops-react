// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// ---------------------------------------
// import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Hello World 🌎</h1>
//     </div>
//   );
// }

// export default App;
// ---------------------------------------
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/flask/test`);
      setMessage(res.data);
    } catch (err) {
      console.error(err);
      setMessage('에러 발생!');
    }
  };

  return (
    <div>
      <h1>React 백엔드 요청 예제</h1>
      <button onClick={fetchData}>백엔드에 요청 보내기</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
