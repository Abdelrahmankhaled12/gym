import HeroBanner from "../../sections/heroPanner/HeroPanner"
import ChoosePlan from "../../sections/choosePlan/ChoosePlan"
import ChooseWorkOut from "../../sections/chooseWork/ChooseWorkOut"

const Home = () => {
    return (
        <div id="body">
            <HeroBanner />
            <ChoosePlan />
            <ChooseWorkOut />
        </div>
    )
}

export default Home