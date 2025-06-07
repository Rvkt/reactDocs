import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/header" element={<Header />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
