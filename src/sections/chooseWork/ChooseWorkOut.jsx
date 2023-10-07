import "./style.scss"
import ContentWrapper from "../../components/contentWrapper/ContentWrapper"
import Select from "react-select";
import { useState, useEffect } from "react";
import Spinner from "../../components/spinner/Spinner";
import { goal, level, tags, results } from "./data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointDown , faHandBackFist } from '@fortawesome/free-solid-svg-icons'
import Aos from "aos";
import "aos/dist/aos.css"

const ChooseWorkOut = () => {

    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, [])

    const [steps, setSteps] = useState(0);
    const [goalValue, setGoalValue] = useState(null);
    const [levelValue, setLevelValue] = useState(null);
    const [tagsValue, setTagsValue] = useState(null);
    const [finish, setFinish] = useState(false);
    const [showSpinner, setShowSpinner] = useState(true);
    const [chooseGoal, setChooseGoal] = useState(false);
    const [chooseLevel, setChooseLevel] = useState(false);
    const [chooseTags, setChooseTags] = useState(false);
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
            setTagsValue(selectedItems.value)
            if (!chooseTags) setSteps((prev) => prev + 1);
            setChooseTags(true);
        }
    }

    const finishClick = () => {
        if (finish) {
            setSteps(0);
            setShowPlan(false);
            setChooseGoal(false);
            setChooseLevel(false);
            setChooseTags(false);
            setResult("");
            setGoalValue(null)
            setLevelValue(null)
            setTagsValue(null)
        } else {
            results.forEach(element => {
                console.log(element.values.join("|"));
                console.log(goalValue + "|" + levelValue + "|" + tagsValue);
                if (element.values.join("|") === (goalValue + "|" + levelValue + "|" + tagsValue)) {
                    setResult(element.result)
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
        <div className="chooseWork" id="choosePlan">
            <ContentWrapper >
                <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                    <h1>Choose Workout <FontAwesomeIcon icon={faHandBackFist} /></h1>
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
                            options={tags}
                            onChange={onChange}
                            placeholder={tagsValue === null ? "Tags" : tagsValue}
                            className="react-select-container genresDD genresDD-3"
                            classNamePrefix="react-select"
                            value={tagsValue}
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
                            {showPlan && (
                                <>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faHandPointDown} />
                                    </div>
                                    <a href={result}>Go to training</a>
                                </>
                            )}
                        </>
                    }
                </div>
            </ContentWrapper>
        </div>
    )
}

export default ChooseWorkOut