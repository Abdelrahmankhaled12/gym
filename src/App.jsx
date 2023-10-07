import Background from './components/background/Background'
import HeroBanner from './sections/heroPanner/HeroPanner'
import ChoosePlan from './sections/choosePlan/ChoosePlan'
import { useEffect, useState } from 'react';
import Animation from "./components/animation/Animation"
import ChooseWorkOut from './sections/chooseWork/ChooseWorkOut';
function App() {

  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 4000);
  }, []);


  return (
    <div className="App">
      {showSpinner ?
        <Animation /> :
        (
          <>
            <Background />
            <div id="body">
              <HeroBanner />
              <ChoosePlan />
              <ChooseWorkOut />
            </div>
          </>
        )
      }
    </div>
  );
}

export default App
