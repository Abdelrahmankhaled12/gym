import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Plan from './pages/plan/Plan';
function App() {





  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/plan' element={<Plan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
