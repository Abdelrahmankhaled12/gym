import Background from './components/background/Background'
// import { useEffect, useState } from 'react';
// import Animation from "./components/animation/Animation"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Plan from './pages/plan/Plan';
function App() {

  // const [showSpinner, setShowSpinner] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowSpinner(false);
  //   }, 4000);
  // }, []);


  return (
    <BrowserRouter>
      <Background />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/plan' element={<Plan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
