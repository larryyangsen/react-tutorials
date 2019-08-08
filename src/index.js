import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function App() {
    return (
        <div className="App">
            <h1>Hello 你好嗎？</h1>
            <h2>珍重再見 期待再相逢!</h2>
        </div>
    );
}

// const App = () => (
//   <div className="App">
//       <h1>Hello 你好嗎？</h1>
//       <h2>珍重再見 期待再相逢!</h2>
//     </div>
// );

// const app = () => (
//   <div className="App">
//     <h1>Hello 你好嗎？</h1>
//     <h2>珍重再見 期待再相逢!</h2>
//   </div>
// );

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
// ReactDOM.render(<app />, rootElement);
