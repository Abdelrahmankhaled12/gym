import HeroBanner from "../../sections/heroPanner/HeroPanner"
import ChoosePlan from "../../sections/choosePlan/ChoosePlan"
import ChooseWorkOut from "../../sections/chooseWork/ChooseWorkOut"
import { useEffect, useState } from 'react';
import Animation from "../../components/animation/Animation"
import Background from "../../components/background/Background";
const Home = () => {

    useEffect(() => {
        setTimeout(() => {
            setShowSpinner(false);
        }, 4000);
    }, []);

    const [showSpinner, setShowSpinner] = useState(true);

    return (
        <>
            {
                showSpinner ?
                    (
                        <Animation />
                    )
                    : (
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
        </>
    )
}

export default Home