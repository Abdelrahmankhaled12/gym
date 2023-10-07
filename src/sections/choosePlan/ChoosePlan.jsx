import "./style.scss"
import ContentWrapper from "../../components/contentWrapper/ContentWrapper"
import Select from "react-select";
import { useState, useEffect } from "react";
import Spinner from "../../components/spinner/Spinner";
import { goal, level, frequency, results } from "./data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye } from '@fortawesome/free-solid-svg-icons'
import Aos from "aos";
import "aos/dist/aos.css"
import target from "../../assets/target.png"
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { getLinks , getTitle} from '../../store/linksSlice';

const ChoosePlan = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, [])

    const [steps, setSteps] = useState(0);
    const [goalValue, setGoalValue] = useState(null);
    const [levelValue, setLevelValue] = useState(null);
    const [frequencyValue, setFrequencyValue] = useState(null);
    const [finish, setFinish] = useState(false);
    const [showSpinner, setShowSpinner] = useState(true);
    const [chooseGoal, setChooseGoal] = useState(false);
    const [chooseLevel, setChooseLevel] = useState(false);
    const [chooseFrequency, setChooseFrequency] = useState(false);
    const [showPlan, setShowPlan] = useState(false);
    const [result, setResult] = useState("");


    const onChange = (selectedItems, action) => {
        if (action.name === "goal") {
            setGoalValue(selectedItems.value)
            if (!chooseGoal) setSteps((prev) => prev + 1);
            setChooseGoal(true);
        } else if (action.name === "level") {
            setLevelValue(selectedItems.value)
            if (!chooseLevel) setSteps((prev) => prev + 1);
            setChooseLevel(true);
        } else {
            setFrequencyValue(selectedItems.value)
            if (!chooseFrequency) setSteps((prev) => prev + 1);
            setChooseFrequency(true);
        }
    }

    const finishClick = () => {
        if (finish) {
            setSteps(0);
            setShowPlan(false);
            setChooseGoal(false);
            setChooseLevel(false);
            setChooseFrequency(false);
            setResult("");
            setGoalValue(null)
            setLevelValue(null)
            setFrequencyValue(null)
        } else {
            results.forEach(element => {
                if (element.values.join("|") === (goalValue + "|" + levelValue + "|" + frequencyValue)) {
                    setResult(goalValue + " - " + levelValue + " - " + (frequencyValue === "2" ? "8 workouts" : "12 workouts"))
                    dispatch(getTitle(goalValue + " - " + levelValue + " - " + (frequencyValue === "2" ? "8 workouts" : "12 workouts")))
                    dispatch(getLinks(element.link))
                }

            })
        }

        if (steps === 3 && !finish) {
            setShowSpinner(true);
            setTimeout(() => {
                setShowSpinner(false);
                setShowPlan(true);
            }, 3000);
        }
        setFinish(!finish);
    }

    return (
        <div className="choosePlan" id="choosePlan">
            <ContentWrapper >
                <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                    <h1>Choose Plan <FontAwesomeIcon icon={faBullseye} /></h1>
                    <div className="filters">
                        <Select
                            name="goal"
                            options={goal}
                            onChange={onChange}
                            placeholder={goalValue === null ? "Goal" : goalValue}
                            className="react-select-container genresDD genresDD-1"
                            classNamePrefix="react-select"
                            value={goalValue}
                        />
                        <Select
                            name="level"
                            options={level}
                            onChange={onChange}
                            placeholder={levelValue === null ? "Level" : levelValue}
                            className="react-select-container genresDD genresDD-2"
                            classNamePrefix="react-select"
                            value={levelValue}
                        />
                        <Select
                            name="frequency"
                            options={frequency}
                            onChange={onChange}
                            placeholder={frequencyValue === null ? "Frequency" : frequencyValue}
                            className="react-select-container genresDD genresDD-3"
                            classNamePrefix="react-select"
                            value={frequencyValue}
                        />
                    </div>
                    <div className="progress">
                        <p className="void"></p>
                        <p className="busy" style={{ width: steps * 33.333333333 + "%" }}></p>
                    </div>
                    <button className={`${steps === 3 ? "" : "hide"}`} onClick={finishClick}>{finish ? "Reset" : "Finish"}</button>
                    {finish &&
                        <>
                            {showSpinner && <Spinner />}
                            {showPlan &&
                                <>
                                    <p>Plan : {result}</p>
                                    <img src={target} />
                                    <Link to={"/plan"}>Go to workouts</Link>
                                </>
                            }
                        </>
                    }
                </div>
            </ContentWrapper>
        </div>
    )
}

export default ChoosePlan