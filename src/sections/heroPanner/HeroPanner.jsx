import "./style.scss"
import ContentWrapper from "../../components/contentWrapper/ContentWrapper"
import { useState , useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css"

const HeroBanner = () => {
    const [, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true);
        const section = document.getElementById('choosePlan');
        section.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, [])

    return (
        <div className="heroBanner">
            <ContentWrapper>
                <div className="heroBannerContent" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                    <span className="title">BE STRONG TRANING HARD.</span>
                    <button onClick={handleButtonClick}>Start Now</button>
                </div>
                <div className="opacity-layer"></div>
            </ContentWrapper>
        </div>
    )
}

export default HeroBanner