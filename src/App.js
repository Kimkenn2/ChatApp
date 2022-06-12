import logo from './logo.svg';
import './App.css';
// import React-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from './Components/SignUpPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
