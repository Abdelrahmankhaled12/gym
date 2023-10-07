import "./style.scss"
import ContentWrapper from "../../components/contentWrapper/ContentWrapper"
import { useState, useEffect } from "react";
import { tags, results } from "./data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandBackFist } from '@fortawesome/free-solid-svg-icons'
import Aos from "aos";
import "aos/dist/aos.css"

const ChooseWorkOut = () => {

    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, [])

    const [steps, setSteps] = useState(0);
    const [chooseTags, setChooseTags] = useState(false);
    const [result, setResult] = useState("");


    const onChange = (event) => {
        if (!chooseTags) setSteps((prev) => prev + 1);
        setChooseTags(true);
        results.forEach(element => {
            if (element.value === event.target.value) {
                setResult(element.result)
            }
        })
    }

    return (
        <div className="chooseWork" id="choosePlan">
            <ContentWrapper >
                <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                    <h1>Choose Workout <FontAwesomeIcon icon={faHandBackFist} /></h1>
                    <div className="filters">
                        {tags.map((element, index) => (
                            <div className="checkBox" key={index}>
                                <input type="radio" name="work" id={element} onChange={onChange} value={element} />
                                <label htmlFor={element}>{element}</label>
                            </div>
                        ))}
                    </div>
                    <a href={result} className={`${steps === 1 ? "" : "hide"}`}>Go to Workout</a>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default ChooseWorkOut