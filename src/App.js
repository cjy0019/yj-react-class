import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CounterPage from './pages/CounterPage';
import LoginPage from './pages/LoginPage';

// 라우팅처리를 여기서 주로한다.
// 전역세팅

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
